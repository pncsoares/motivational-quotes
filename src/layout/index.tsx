import Footer from '../components/Footer';
import Header from '../components/Header';
import Quote from '../components/Quote';

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen select-none bg-base-100 text-bg-base-100-content">
        <Header />
        <Quote />
        <Footer />
      </div>
    </>
  );
}
