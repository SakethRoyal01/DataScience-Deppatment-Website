import { motion } from "framer-motion";
import clgLogo from "@/assets/clg-logo.png";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 1.8,
        duration: 0.7,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.img
          src={clgLogo}
          alt="Dr. M.G.R. Educational and Research Institute"
          className="h-20 w-20 object-contain mb-5"
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
        />

        <p className="text-xs tracking-[0.25em] uppercase text-slate-500 mb-2">
          Department of
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold tracking-wide text-slate-900">
          Data Science
        </h1>

        <motion.div
          className="mt-6 h-[2px] w-32 bg-slate-200 overflow-hidden"
        >
          <motion.div
            className="h-full bg-slate-900"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-slate-400">
          Loading
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
