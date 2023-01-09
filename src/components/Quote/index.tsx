import { useEffect, useState } from 'react';
import { IQuote } from '../../interfaces/Quote';
import { getQuotes } from '../../services/quote.services';
import Loading from '../Loading';

export default function Quote() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [quotes, setQuotes] = useState<IQuote[]>([]);
  const [quote, setQuote] = useState<IQuote | undefined>(undefined);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    showRandomQuote();
  }, [quotes]);

  async function fetchData() {
    setLoading(true);

    const fetchedQuotes = await getQuotes();

    if (fetchedQuotes && fetchedQuotes.length > 0) {
      setQuotes(fetchedQuotes);
    } else {
      setError('No quotes for today. Please return tomorrow.');
    }

    setLoading(false);
  }

  const showRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  };

  return (
    <>
      <div className="flex flex-col flex-1 gap-5 sm:gap-10 p-5 sm:p-10 justify-center align-center content-center text-center">
        <div
          className="text-xl sm:text-2xl"
          onClick={showRandomQuote}
        >
          {loading && <Loading />}
          {!loading && error && <h1>{error}</h1>}
          {!loading && !error && <h1>{quote?.text}</h1>}
        </div>
        <p className="text-sm sm:text-md">{quote?.author}</p>
      </div>
    </>
  );
}
