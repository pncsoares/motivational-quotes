"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Quote from "@/components/quote";
import { quotes } from "@/data/quotes";
import type { QuoteType } from "@/types/quote";
import { Skeleton } from "@heroui/react";
import { useEffect, useState } from "react";

const quoteDivClassName: string =
  "flex flex-col items-center justify-center align-center w-full gap-10 px-5";

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState<QuoteType | null>(null);

  useEffect(() => {
    setCurrentQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <main className="flex flex-1 w-full flex-col items-center justify-between py-5 sm:py-10 sm:items-start">
      <Header />
      {currentQuote ? (
        <div className={quoteDivClassName}>
          <Quote quote={currentQuote} />
        </div>
      ) : (
        <div className={quoteDivClassName}>
          <div className="flex flex-col w-full space-y-3 items-center align-center">
            <Skeleton className="h-4 w-full rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-5/6 rounded" />
            <Skeleton className="h-4 w-4/6 rounded" />
          </div>
          <div className="flex flex-col w-full space-y-3 items-center align-center">
            <Skeleton className="h-4 w-3/6 rounded" />
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
