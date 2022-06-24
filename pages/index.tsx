import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../@types/contentful";

type Props = {
  projects: Project[];
};

const Home: NextPage<Props> = ({ projects }) => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled(!toggled);
  console.log(projects);

  return (
    <div className="px-4 py-2">
      <Head>
        <title>Cendy</title>
      </Head>
      <div className="z-30 sticky top-2 flex justify-between items-center w-full h-10">
        <p className="font-bold text-2xl">C</p>
        <button onClick={toggle}>
          <GiHamburgerMenu size={25} />
        </button>
      </div>
      <Hero />
      <div className="mx-auto max-w-xs bg-[#1d1d1d] p-4 rounded-md">
        <q>You only live once, but if you do it right, once is enough.</q>
        <p className="text-right">― Mae West</p>
      </div>
      <div id="projects" className="mt-5">
        <div className="grid grid-cols-2 gap-1">
          {projects.map((item, i) => {
            return <ProjectCard item={item} key={i} />;
          })}
        </div>
      </div>
      <div id="blog" className="mt-5">
        <h2 className="text-2xl font-bold text-center text-white/30">
          BLOG POSTS
        </h2>
      </div>
      <Menu toggled={toggled} toggle={toggle} />
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

export default Home;
