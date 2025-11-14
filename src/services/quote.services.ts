import { QUOTES } from '@/data/quotes';
import { IQuote } from '@/interfaces/Quote';

export const getQuotes = async (): Promise<IQuote[]> => {
  let quotes: IQuote[] = [];

  const randomIndex = Math.floor(Math.random() * QUOTES.length);
  quotes = [
    {
      quote: QUOTES[randomIndex].text,
      author: QUOTES[randomIndex].author,
    },
  ];

  return quotes;
};
