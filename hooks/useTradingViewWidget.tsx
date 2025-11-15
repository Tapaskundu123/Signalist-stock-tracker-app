// useTradingViewWidget.ts
"use client";

import { useEffect, useRef } from "react";

const useTradingViewWidget = (scriptUrl: string, config: Record<string, unknown>) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Avoid injecting multiple times
    if (container.dataset.tvLoaded === "true") return;

    // Find the required widget element inside the container (should exist from component render)
    const widgetEl = container.querySelector<HTMLElement>(".tradingview-widget-container__widget");
    if (!widgetEl) {
      // If widget element is missing, create one (fallback)
      const fallback = document.createElement("div");
      fallback.className = "tradingview-widget-container__widget";
      fallback.style.width = "100%";
      fallback.style.height = "100%";
      container.appendChild(fallback);
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.async = true;

    // TradingView embeds expect the config object in the script tag body as JSON
    script.innerHTML = JSON.stringify(config);

    container.appendChild(script);
    container.dataset.tvLoaded = "true";

    return () => {
      // cleanup script and data flag on unmount or config/scriptUrl change
      try {
        if (script.parentNode) script.parentNode.removeChild(script);
      } catch (e) {
        /* ignore */
      }
      if (container) {
        delete container.dataset.tvLoaded;
      }
    };
    // JSON.stringify(config) used to make dependency stable for object configs
  }, [scriptUrl, JSON.stringify(config)]);

  return containerRef;
};

export default useTradingViewWidget;
