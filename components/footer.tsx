import { authors } from "@/data/authors";
import ProjectAuthor from "./social/author";

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center justify-center align-center w-full text-muted gap-4 py-5 sm:py-10 font-[ibm-plex-sans] font-light text-sm">
      <div className="flex flex-col">
        <p>Motivating souls since the 90's</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
      <div className="flex flex-row items-center justify-center align-center w-full gap-1">
        {authors.map((author, idx) => (
          <span key={author.name} className="flex items-center">
            {idx > 0 && <span className="mr-1">&</span>}
            <ProjectAuthor href={author.href} name={author.name} />
          </span>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
