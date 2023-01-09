import LightDarkSwitcher from '../LightDarkSwitcher';

export default function Header() {
  return (
    <>
      <div className="navbar bg-primary text-primary-content p-5 sm:p-10">
        <div className="navbar-start">
          <a className="normal-case text-xl font-bold">Motivational Quotes</a>
        </div>
        <div className="navbar-center"></div>
        <div className="navbar-end">
          <LightDarkSwitcher />
        </div>
      </div>
    </>
  );
}
