import type { NextPage } from "next";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Head from "next/head";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

const Home: NextPage = () => {
  const [toggled, setToggled] = useState(false);

  const toggle = () => setToggled(!toggled);

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
      <div></div>
      <Menu toggled={toggled} toggle={toggle} />
    </div>
  );
};

export default Home;
