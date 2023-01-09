import Footer from '../components/Footer';
import Header from '../components/Header';
import Quote from '../components/Quote';

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen select-none">
        <div className="sticky top-0">
          <Header />
        </div>
        <div className="flex flex-1">
          <Quote />
        </div>
        <div className="sticky bottom-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
