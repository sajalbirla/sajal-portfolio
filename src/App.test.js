import React from "react";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

beforeEach(() => {
  localStorage.clear();
  document.documentElement.dataset.theme = "dark";
  delete window.gtag;
});

afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

test("theme switches both ways and persists the selection", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Switch to light theme" }));
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  expect(localStorage.getItem("theme")).toBe("light");
  fireEvent.click(screen.getByRole("button", { name: "Switch to dark theme" }));
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  expect(localStorage.getItem("theme")).toBe("dark");
});

test("honors the theme initialized before React loads", () => {
  document.documentElement.dataset.theme = "light";
  render(<App />);
  expect(screen.getByRole("button", { name: "Switch to dark theme" })).toBeInTheDocument();
});

test("theme remains usable if browser storage is blocked", () => {
  jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
    throw new Error("Storage unavailable");
  });
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: "Switch to light theme" }));
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});

test("resume is a native download without requiring analytics", () => {
  render(<App />);
  const resume = screen.getByRole("link", { name: /Resume/ });
  expect(resume).toHaveAttribute("download", "Sajal_Birla_Resume.pdf");
  expect(resume.getAttribute("href")).toMatch(/\/Resume_Sajal_Birla_Developer\.pdf$/);
  // Cancel only the browser navigation while exercising the click handler.
  resume.addEventListener("click", event => event.preventDefault());
  fireEvent.click(resume);
  window.gtag = jest.fn();
  fireEvent.click(resume);
  expect(window.gtag).toHaveBeenCalledWith("event", "resume_click", {
    source: "hero",
    file_name: "Resume_Sajal_Birla_Developer.pdf",
    file_extension: "pdf",
    send_to: "G-6VNCE9RP65",
  });
});

test("navigation, social and contact destinations use real links", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute("href", "#experience");
  expect(screen.getByRole("link", { name: "Contact Me" })).toHaveAttribute("href", "#contact");
  expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/sajalbirla");
  expect(screen.getByRole("link", { name: /sajalbirla87@gmail.com/ })).toHaveAttribute("href", "mailto:sajalbirla87@gmail.com");
});

test("portfolio actions send the expected analytics labels", () => {
  window.gtag = jest.fn();
  render(<App />);
  const actions = [
    ["Contact Me", "contact_click", { method: "section", source: "hero" }],
    ["sajalbirla87@gmail.com", "contact_click", { method: "email", source: "footer" }],
    ["+91-6377734843", "contact_click", { method: "phone", source: "footer" }],
    ...["GitHub", "Instagram", "LinkedIn", "Facebook", "X", "WhatsApp"].map(platform => [
      platform, "social_click", { platform, source: "footer" },
    ]),
    ["Experience", "navigation_click", { section: "experience" }],
  ];
  actions.forEach(([name, event, parameters]) => {
    const link = screen.getByRole("link", { name });
    link.addEventListener("click", e => e.preventDefault());
    fireEvent.click(link);
    expect(window.gtag).toHaveBeenLastCalledWith("event", event, { ...parameters, send_to: "G-6VNCE9RP65" });
  });
  expect(window.gtag).toHaveBeenCalledTimes(actions.length);
});
