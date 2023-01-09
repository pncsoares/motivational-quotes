import LightDarkSwitcher from '../LightDarkSwitcher';

export default function Header() {
  return (
    <>
      <div className="navbar flex flex-row justify-between p-5 sm:p-10">
        <a className="normal-case text-xl font-bold">Motivational Quotes</a>
        <LightDarkSwitcher />
      </div>
    </>
  );
}
