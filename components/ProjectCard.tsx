import React from "react";
import { Project } from "../@types/contentful";

type Props = {
  item: Project;
};

function ProjectCard({ item }: Props) {
  return (
    <div className="w-full bg-[#1d1d1d] p-2">
      <h2 className="font-mono">{item.fields.title}</h2>
      <ul className="flex flex-wrap gap-1">
        {item.fields.tags.map((item, i) => {
          return (
            <li className="text-xs bg-[#242424] p-2 w-max rounde-sm" key={i}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectCard;
