import type { GetStaticProps, NextPage } from "next";
import { useState } from "react";
import { motion, type Variant } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import ProjectCard from "../components/ProjectCard";
import { Post, Project } from "../@types/contentful";
import PostCard from "../components/PostCard";

type Props = {
  projects: Project[];
  posts: Post[];
};

const Home: NextPage<Props> = ({ projects, posts }) => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled(!toggled);

  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Cendy</title>
      </Head>
      <div className="px-4 z-30 sticky top-0 flex justify-between items-center w-full h-10">
        <p className="font-bold text-2xl">C</p>
        <button onClick={toggle}>
          <GiHamburgerMenu size={25} />
        </button>
      </div>
      <div className="px-4">
        <Hero />
        <div className="mx-auto max-w-xs bg-[#1d1d1d] p-4 rounded-md">
          <q>You only live once, but if you do it right, once is enough.</q>
          <p className="text-right">― Mae West</p>
        </div>
        <motion.div
          id="projects"
          variants={projectVariant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-1 mt-5"
        >
          {projects.map((item, i) => {
            return <ProjectCard item={item} key={i} />;
          })}
        </motion.div>
        <div id="blog" className="mt-5">
          <h2 className="text-2xl font-bold text-center text-white/30">
            BLOG POSTS
          </h2>
          <div className="mt-4 space-y-px">
            {posts.map((item, i) => {
              return <PostCard item={item} key={i} />;
            })}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-[#1d1d1d] px-4 py-8 text-center space-y-4">
        <p className="font-mono">What you waiting for?</p>
        <div>
          <h2 className="text-2xl font-bold text-center">CONTACT ME ^.^</h2>
          <p className="text-sm">I love to work with you!</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 rounded-md">
          <a href="mailto:cendywork@gmail.com">Contact me</a>
        </button>
      </div>
      <Menu toggled={toggled} toggle={toggle} />
    </div>
  );
};

const projectVariant: { [x: string]: Variant } = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const getStaticProps: GetStaticProps = async () => {
  const client = require("../contentful");
  const projects = await client.getEntries({
    content_type: "projects",
  });
  const posts = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      projects: projects.items,
      posts: posts.items,
    },
    revalidate: 10,
  };
};

export default Home;
