import { motion, type Variant } from "framer-motion";
import { Project } from "../@types/contentful";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
  isIndex?: boolean;
};

function Projects({ projects, isIndex }: Props) {
  return (
    <motion.div
      variants={thisVariant}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-5"
    >
      {projects.slice(0, isIndex ? 6 : projects.length).map((item, i) => {
        return <ProjectCard item={item} key={i} />;
      })}
    </motion.div>
  );
}

const thisVariant: { [x: string]: Variant } = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default Projects;
