import { IQuote } from '@/interfaces/Quote';
import axios from 'axios';

export const getQuotes = async (): Promise<IQuote[]> => {
  let quotes: IQuote[] = [];

  const url = import.meta.env.VITE_QUOTES_API_URL;

  const headers = {
    'Content-Type': 'application/json',
  };

  await axios
    .get(url, { headers })
    .then((response: any) => {
      quotes = response.data;
    })
    .catch((error: any) => {
      console.error(error);
    });

  return quotes;
};
