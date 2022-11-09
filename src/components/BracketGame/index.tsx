import { motion } from "framer-motion";

// Components
import { Final } from "../PlayersCard/Final";
import { Semifinal } from "../PlayersCard/Semifinal";
import { PlayersCard } from "../PlayersCard/WinAndLoseCards";
import { WinnerCard } from "../PlayersCard/WinnerCard";

export const BracketGame = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex mt-8 max-w-[100%] overflow-auto mx-4 tablet:ml-48 relative pb-[150px] tablet:pb-16"
    >
      <PlayersCard />
      <Semifinal />
      <Final />
      <WinnerCard />
    </motion.section>
  );
};
