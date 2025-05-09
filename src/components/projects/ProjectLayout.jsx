import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);
const ProjectLayout = ({ name, description, date, demoLink, logo }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-4">
        <div className="relative w-10 h-10 flex-shrink-0">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-foreground">{name}</h2>
          <p className="text-muted hidden sm:inline-block">{description}</p>
        </div>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
    </ProjectLink>
  );
};

export default ProjectLayout;
