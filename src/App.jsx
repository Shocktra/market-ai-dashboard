import React, { useState } from 'react';
import { 
  TickerTape, 
  MarketOverview, 
  AdvancedRealTimeChart, 
  TechnicalAnalysis 
} from "react-ts-tradingview-widgets";
import './index.css';

function App() {
  const [symbol, setSymbol] = useState("BIST:XU100");

  const handleSearch = (e) => {
    e.preventDefault();
    const val = e.target.elements.ticker.value.trim().toUpperCase();
    if (val) {
      setSymbol(val);
    }
  };

  return (
    <div className="app-container">
      {/* Ticker Tape */}
      <div className="ticker-wrapper">
        <TickerTape colorTheme="dark" displayMode="compact" symbols={[
          {"proName": "BIST:XU100", "title": "BIST 100"},
          {"proName": "FOREXCOM:SPXUSD", "title": "S&P 500"},
          {"proName": "FOREXCOM:NSXUSD", "title": "Nasdaq 100"},
          {"proName": "BINANCE:BTCUSDT", "title": "Bitcoin"},
          {"proName": "OANDA:XAUUSD", "title": "Gold"}
        ]} />
      </div>

      <header className="header glass">
        <div>
          <h1>📈 Borsa Zekası <span className="subtitle">AI Dashboard</span></h1>
          <p className="ai-desc" style={{marginTop: '4px', marginBottom: 0}}>Borsa İstanbul ve Küresel piyasalar için interaktif AI destekli analiz paneli.</p>
        </div>
        <form onSubmit={handleSearch} className="search-form">
          <input 
            type="text" 
            name="ticker" 
            placeholder="Hisse veya Kripto arayın (Örn: THYAO, AAPL, BTCUSDT)" 
            className="search-input"
          />
          <button type="submit" className="search-btn">Analiz Et</button>
        </form>
      </header>

      <main className="main-content">
        <div className="left-panel">
          {/* Main Chart */}
          <div className="chart-container glass">
            <h2>Gelişmiş Grafik ({symbol})</h2>
            <div className="widget-box" style={{ height: '500px' }}>
              <AdvancedRealTimeChart 
                theme="dark"
                symbol={symbol}
                interval="D"
                style="1"
                locale="tr"
                enable_publishing={false}
                allow_symbol_change={true}
                calendar={false}
                autosize={true}
              />
            </div>
          </div>

          {/* AI Guide (Technical Analysis) */}
          <div className="ai-guide-container glass">
            <h2>🤖 Yapay Zeka & Teknik Analiz Rehberi</h2>
            <p className="ai-desc">
              Aşağıdaki kadran, seçilen hisse senedinin Hareketli Ortalamalar (MA), RSI, MACD ve diğer temel osilatörlerini canlı olarak hesaplayarak teknik bir <strong>AL/SAT</strong> sinyali üretir.
            </p>
            <div className="widget-box" style={{ height: '400px' }}>
              <TechnicalAnalysis 
                colorTheme="dark" 
                symbol={symbol} 
                locale="tr" 
                width="100%"
                isTransparent={true}
              />
            </div>
          </div>
        </div>

        <div className="right-panel">
          {/* Hot Lists / Market Overview */}
          <div className="overview-container glass">
            <h2>🔥 Gündem & Trendler</h2>
            <div className="widget-box" style={{ height: '900px' }}>
              <MarketOverview 
                colorTheme="dark" 
                locale="tr" 
                isTransparent={true}
                tabs={[
                  {
                    title: "Borsa İstanbul",
                    symbols: [
                      { s: "BIST:XU100", d: "BIST 100 Endeksi" },
                      { s: "BIST:THYAO", d: "Türk Hava Yolları" },
                      { s: "BIST:TUPRS", d: "Tüpraş" },
                      { s: "BIST:ASELS", d: "Aselsan" },
                      { s: "BIST:SASA", d: "Sasa Polyester" },
                      { s: "BIST:EREGL", d: "Erdemir" }
                    ]
                  },
                  {
                    title: "ABD Teknoloji",
                    symbols: [
                      { s: "NASDAQ:AAPL", d: "Apple" },
                      { s: "NASDAQ:MSFT", d: "Microsoft" },
                      { s: "NASDAQ:NVDA", d: "Nvidia" },
                      { s: "NASDAQ:TSLA", d: "Tesla" },
                      { s: "NASDAQ:AMZN", d: "Amazon" }
                    ]
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
