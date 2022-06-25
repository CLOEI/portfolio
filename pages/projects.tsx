import type { NextPage, GetStaticProps } from "next";
import type { Project } from "../@types/contentful";
import React from "react";
import Projects from "../components/Projects";

type Props = {
  projects: Project[];
};

const ProjectsIndex: NextPage<Props> = ({ projects }) => {
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = require("../contentful");
  const projects = await client.getEntries({
    content_type: "projects",
  });

  return {
    props: {
      projects: projects.items,
    },
    revalidate: 10,
  };
};

export default ProjectsIndex;
