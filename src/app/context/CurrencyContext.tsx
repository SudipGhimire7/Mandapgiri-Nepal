import { createContext, useContext, useState, ReactNode } from 'react';

export type Currency = 'NPR' | 'USD' | 'EUR' | 'AUD';

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (priceInNPR: number) => { value: number; symbol: string };
  formatPrice: (priceInNPR: number) => string;
}

const CONVERSION_RATES: Record<Currency, number> = {
  NPR: 1,
  USD: 0.0075, // 1 NPR = 0.0075 USD approx
  EUR: 0.0071,
  AUD: 0.011,
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  NPR: 'NPR',
  USD: '$',
  EUR: '€',
  AUD: 'A$',
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('NPR');

  const convertPrice = (priceInNPR: number) => {
    const rate = CONVERSION_RATES[currency];
    return {
      value: Math.round(priceInNPR * rate),
      symbol: CURRENCY_SYMBOLS[currency],
    };
  };

  const formatPrice = (priceInNPR: number) => {
    const { value, symbol } = convertPrice(priceInNPR);
    if (currency === 'NPR') {
      return `${symbol} ${value.toLocaleString()}`;
    }
    return `${symbol}${value.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, formatPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
