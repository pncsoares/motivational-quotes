import { IQuote } from '@/interfaces/Quote';
import { getQuotes } from '@/services/quote.services';
import { useEffect, useState } from 'react';
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

    const retrievedQuotes = await getQuotes();

    if (retrievedQuotes && retrievedQuotes.length > 0) {
      setQuotes(retrievedQuotes);
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
      <div className="flex flex-col flex-1 gap-8 sm:gap-12 p-5 sm:p-10 justify-center align-center content-center text-center max-w-4xl mx-auto">
        <div
          className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
          onClick={showRandomQuote}
        >
          {loading && <Loading />}
          {!loading && error && <h1 className="text-lg sm:text-xl text-error">{error}</h1>}
          {!loading && !error && (
            <blockquote className="relative">
              <div className="text-6xl sm:text-8xl text-primary/20 absolute -top-4 -left-2 sm:-left-4 leading-none font-serif">
                "
              </div>
              <h1 className="text-xl sm:text-3xl md:text-4xl font-light leading-relaxed tracking-wide px-8 sm:px-12">
                "{quote?.quote}"
              </h1>
              <div className="text-6xl sm:text-8xl text-primary/20 absolute -bottom-8 -right-2 sm:-right-4 leading-none font-serif">
                "
              </div>
            </blockquote>
          )}
        </div>
        {quote?.author && (
          <cite className="text-base sm:text-lg md:text-xl text-secondary font-medium not-italic">
            {quote.author}
          </cite>
        )}
      </div>
    </>
  );
}
