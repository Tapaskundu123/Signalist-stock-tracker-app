// app/page.tsx (or wherever)
import TradingWidget from "@/components/TradingWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex min-h-screen home-wrapper p-4">
      <section className="grid gap-6 w-full grid-cols-1 lg:grid-cols-2">
        <div>
          <TradingWidget
            title="Market Overview"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            // override height for this instance if needed
            heightClass="h-64 md:h-96 lg:h-[520px]"
            className="custom-chart"
          />
        </div>

        <div>
          <TradingWidget
            title="Stock Heatmap"
            scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js"
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            heightClass="h-56 md:h-80 lg:h-[600px]"
            className="custom-chart"
          />
        </div>
      </section>
    </div>
  );
}

