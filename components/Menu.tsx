import { motion, type Variant } from "framer-motion";
import { useEffect } from "react";

type Props = {
  toggled: boolean;
  toggle: () => void;
};

function Menu({ toggled, toggle }: Props) {
  useEffect(() => {
    const target = document.querySelector("body")?.classList;
    if (toggled) {
      target?.add("disable-scroll");
    } else {
      target?.remove("disable-scroll");
    }
  }, [toggled]);

  return (
    <>
      {toggled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={
            toggled
              ? {
                  opacity: 1,
                }
              : {
                  opacity: 0,
                }
          }
          onClick={toggle}
          className="z-40 fixed inset-0 bg-black/80"
        ></motion.div>
      )}
      <motion.div
        initial="initial"
        animate={toggled ? "animate" : "hidden"}
        variants={containerVariant}
        className="z-50 fixed right-0 top-0 bottom-0 w-40 bg-[#1d1d1d] space-y-2"
      >
        <button onClick={toggle} className="px-4 py-2 font-bold">
          <span className="font-mono">X</span> CLOSE
        </button>
        <motion.button
          variants={buttonVariant}
          className="font-mono block px-4 py-2 w-full"
        >
          <a href="#projects">Projects</a>
        </motion.button>
        <motion.button
          variants={buttonVariant}
          className="font-mono block px-4 py-2 w-full"
        >
          <a href="#blog">Blog</a>
        </motion.button>
      </motion.div>
    </>
  );
}

const buttonVariant: { [x: string]: Variant } = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "0",
  },
  hidden: {
    x: "100%",
  },
};

const containerVariant: { [x: string]: Variant } = {
  initial: {
    x: "100%",
  },
  animate: {
    x: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    x: "100%",
  },
};

export default Menu;
