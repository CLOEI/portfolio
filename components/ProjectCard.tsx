import React from "react";
import { motion, type Variant } from "framer-motion";
import { Project } from "../@types/contentful";

type Props = {
  item: Project;
};

function ProjectCard({ item }: Props) {
  return (
    <motion.div
      variants={thisVariant}
      className="flex flex-col w-full bg-[#1d1d1d] p-2"
    >
      <h3 className="font-mono">{item.fields.title}</h3>
      <ul className="flex flex-wrap gap-1">
        {item.fields.tags.map((item, i) => {
          return (
            <li className="text-xs bg-[#242424] p-2 w-max rounde-sm" key={i}>
              {item}
            </li>
          );
        })}
      </ul>
      <button className="ml-auto mt-auto w-max">― View</button>
    </motion.div>
  );
}

const thisVariant: { [x: string]: Variant } = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export default ProjectCard;
