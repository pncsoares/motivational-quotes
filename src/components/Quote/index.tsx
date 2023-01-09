import { useEffect, useState } from 'react';
import { IQuote } from '../../interfaces/Quote';
import { getQuotes } from '../../services/quote.services';

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
      <div className="hero flex-1 content-start pt-0 sm:pt-36 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            {loading && <button className="btn btn-square btn-ghost btn-lg loading"></button>}
            {!loading && error && <h1 className="text-xl sm:text-2xl">{error}</h1>}
            {!loading && !error && <h1 className="text-xl sm:text-2xl">{quote?.text}</h1>}
            <p className="py-5">{quote?.author}</p>
            <button
              className="btn btn-primary"
              onClick={showRandomQuote}
            >
              Get another quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
