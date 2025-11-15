import TradingWidget from "@/components/TradingWidget";
import { MARKET_OVERVIEW_WIDGET_CONFIG } from "@/lib/constants";


export default function Home() {
 return(
  <div className="flex min-h-screen home-wrapper">
    <section>
      <div>
        <TradingWidget 
        title="Market Overview"
        scriptUrl="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"
        config={MARKET_OVERVIEW_WIDGET_CONFIG}
        className="custom-chart"
        />
      </div>
    </section>
  </div>
 )
}



