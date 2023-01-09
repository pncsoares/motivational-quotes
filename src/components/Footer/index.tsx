import GitHub from '../SocialMedia/GitHub';

export default function Footer() {
  return (
    <>
      <footer className="footer footer-center p-5 sm:p-10 flex flex-col gap-4">
        <div>
          <p className="font-bold text-base sm:text-lg">Made by Pedro Soares</p>
          <p>Motivating people since 1992</p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <GitHub />
          </div>
        </div>
      </footer>
    </>
  );
}
