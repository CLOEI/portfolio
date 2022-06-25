import type { GetStaticProps, NextPage } from "next";
import type { Post, Project } from "../@types/contentful";
import { useState } from "react";
import { AiOutlineSwapRight } from "react-icons/ai";
import { motion, type Variant } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import PostCard from "../components/PostCard";
import Projects from "../components/Projects";

type Props = {
  projects: Project[];
  posts: Post[];
};

const Home: NextPage<Props> = ({ projects, posts }) => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled(!toggled);

  return (
    <div className="max-w-7xl mx-auto px-4">
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
      <motion.div
        id="projects"
        variants={projectVariant}
        viewport={{ once: true }}
        initial="initial"
        whileInView="animate"
        className="space-y-2"
      >
        <Projects projects={projects} isIndex />
        <motion.button
          variants={opacityVariant}
          className="block ml-auto w-max text-blue-500 hover:text-blue-500/90 transition-colors"
        >
          <Link href="/projects">
            <a className="flex items-center space-x-2 ">
              <span>See more</span>
              <AiOutlineSwapRight />
            </a>
          </Link>
        </motion.button>
      </motion.div>
      <motion.div
        id="blog"
        variants={opacityVariant}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-5"
      >
        <h2 className="text-2xl font-bold text-center text-white/30">
          BLOG POSTS
        </h2>
        <div className="mt-4 space-y-px">
          {posts.map((item, i) => {
            return <PostCard item={item} key={i} />;
          })}
        </div>
      </motion.div>
      <div className="mt-8 px-4 py-8 text-center space-y-4">
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

const opacityVariant: { [x: string]: Variant } = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
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
