import { Link } from "@heroui/react";

interface ProjectAuthorProps {
  href: string;
  name: string;
}

const ProjectAuthor = ({ href, name }: ProjectAuthorProps) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {name}
    </Link>
  );
};

export default ProjectAuthor;
