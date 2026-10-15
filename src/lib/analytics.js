const measurementId = process.env.REACT_APP_GA_MEASUREMENT_ID || "G-6VNCE9RP65";
const enabled = process.env.REACT_APP_GA_ENABLED === "true" || (
  process.env.NODE_ENV === "production" && process.env.REACT_APP_GA_ENABLED !== "false"
);

// Initialize once, before rendering React, so early interactions can be queued.
export function initializeAnalytics() {
  if (!enabled || !/^G-[A-Z0-9]+$/.test(measurementId) || document.getElementById("google-analytics")) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  // GA sends the initial page_view from this config call. Do not send another manually.
  window.gtag("config", measurementId, {
    ...(process.env.REACT_APP_GA_DEBUG === "true" ? { debug_mode: true } : {}),
  });

  const script = document.createElement("script");
  script.id = "google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

export function trackEvent(name, parameters = {}) {
  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, parameters);
    }
  } catch {
    // Analytics must never prevent navigation or a resume download.
  }
}
