import AutoThemeDetector from '../LightDarkSwitcher';

export default function Header() {
  return (
    <>
      <AutoThemeDetector />
      <div className="navbar flex flex-row justify-center p-5 sm:p-10">
        <a className="normal-case text-xl font-bold">Motivational Quotes</a>
      </div>
    </>
  );
}
