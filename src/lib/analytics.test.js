const originalEnv = { ...process.env };

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv };
  delete process.env.REACT_APP_GA_ENABLED;
  delete process.env.REACT_APP_GA_DEBUG;
  delete process.env.REACT_APP_GA_MEASUREMENT_ID;
  delete window.gtag;
  delete window.dataLayer;
  document.getElementById("google-analytics")?.remove();
});
afterEach(() => { process.env = originalEnv; });

test("does not load Google Analytics in tests by default", () => {
  require("./analytics").initializeAnalytics();
  expect(window.gtag).toBeUndefined();
  expect(document.getElementById("google-analytics")).toBeNull();
});

test("production initializes once and queues early events after config", () => {
  process.env.NODE_ENV = "production";
  const { initializeAnalytics, trackEvent } = require("./analytics");
  initializeAnalytics();
  initializeAnalytics();
  trackEvent("resume_click", { source: "hero" });
  expect(document.querySelectorAll("#google-analytics")).toHaveLength(1);
  expect(document.getElementById("google-analytics").src).toContain("id=G-6VNCE9RP65");
  expect(window.dataLayer.map(args => Array.from(args))).toEqual([
    ["js", expect.any(Date)],
    ["config", "G-6VNCE9RP65", {}],
    ["event", "resume_click", { source: "hero" }],
  ]);
});

test("production tracking can be disabled explicitly", () => {
  process.env.NODE_ENV = "production";
  process.env.REACT_APP_GA_ENABLED = "false";
  require("./analytics").initializeAnalytics();
  expect(document.getElementById("google-analytics")).toBeNull();
});

test("allows an explicit test property and debug mode", () => {
  process.env.REACT_APP_GA_ENABLED = "true";
  process.env.REACT_APP_GA_MEASUREMENT_ID = "G-TEST123";
  process.env.REACT_APP_GA_DEBUG = "true";
  require("./analytics").initializeAnalytics();
  expect(Array.from(window.dataLayer[1])).toEqual(["config", "G-TEST123", { debug_mode: true }]);
});

test("invalid IDs do not load a script", () => {
  process.env.REACT_APP_GA_ENABLED = "true";
  process.env.REACT_APP_GA_MEASUREMENT_ID = "invalid";
  require("./analytics").initializeAnalytics();
  expect(document.getElementById("google-analytics")).toBeNull();
});

test("missing or failing analytics cannot break an interaction", () => {
  const { trackEvent } = require("./analytics");
  expect(() => trackEvent("resume_click")).not.toThrow();
  window.gtag = () => { throw new Error("Blocked"); };
  expect(() => trackEvent("resume_click")).not.toThrow();
});
