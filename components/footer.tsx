import { authors } from "@/data/authors";
import ProjectAuthor from "./social/author";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full items-center justify-center align-center text-center text-muted gap-4 py-5 sm:py-10 text-sm md:text-md">
      <div className="flex flex-col">
        <p>Motivating souls since the 90's</p>
        <p>Copyright © {new Date().getFullYear()}. All rights reserved</p>
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
