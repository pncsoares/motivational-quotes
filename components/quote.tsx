import type { QuoteType } from "@/types/quote";

interface QuoteProps {
  quote: QuoteType;
}

const Quote = ({ quote }: QuoteProps) => {
  return (
    <div className="flex flex-col items-center justify-center align-center w-full space-y-10">
      <span className="font-[georgia] text-4xl font-light text-center">
        "{quote.text}"
      </span>
      {quote.author && (
        <span className="font-[ibm-plex-sans] text-xl font-light italic text-center">
          {quote.author}
        </span>
      )}
    </div>
  );
};

export default Quote;
