# Borsa Zekası - AI Dashboard

Borsa İstanbul ve küresel piyasalar için TradingView widget'larıyla hazırlanmış interaktif panel: kayan fiyat şeridi, gelişmiş grafik, teknik analiz kadranı ve piyasa özeti. Üstteki arama kutusundan sembol değiştirilebilir (örn. `BIST:THYAO`, `NASDAQ:AAPL`, `BINANCE:BTCUSDT`).

> Panel yalnızca bilgilendirme amaçlıdır; yatırım tavsiyesi değildir.

## Geliştirme

```bash
npm install
npm run dev      # geliştirme sunucusu
npm run lint     # oxlint
npm run build    # üretim derlemesi
npm run deploy   # GitHub Pages'e yayınlar (gh-pages)
```

`vite.config.js` içindeki `base: '/market-ai-dashboard/'` ayarı GitHub Pages yolu içindir; repo adı değişirse güncelleyin.

Teknolojiler: React, Vite, react-ts-tradingview-widgets.
