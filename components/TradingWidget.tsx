// TradingWidget.tsx
"use client";

import { memo } from "react";
import useTradingViewWidget from "@/hooks/useTradingViewWidget";
import { cn } from "@/lib/utils";

interface TradingViewWidgetProps {
  title?: string;
  scriptUrl: string;
  config: Record<string, unknown>;
  // Tailwind height classes to control responsive sizing
  heightClass?: string;
  className?: string;
}

const TradingWidget = ({
  title,
  scriptUrl,
  config,
  heightClass = "h-56 md:h-96 lg:h-[600px]", // default responsive heights
  className,
}: TradingViewWidgetProps) => {
  // The hook only needs a ref to append the tradingview script
  const containerRef = useTradingViewWidget(scriptUrl, config);

  return (
    <div className="w-full">
      {title && <h3 className="font-semibold text-2xl text-black mb-5">{title}</h3>}

      {/* Outer container controls responsive height */}
      <div
        ref={containerRef}
        className={cn("tradingview-widget-container w-full overflow-hidden rounded-md", heightClass, className)}
      >
        {/* The element required by TradingView: style uses 100% so it follows the container */}
        <div className="tradingview-widget-container__widget w-full h-full" />
      </div>
    </div>
  );
};

export default memo(TradingWidget);
