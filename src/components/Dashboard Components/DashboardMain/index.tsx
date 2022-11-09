import { useContext, useEffect } from "react";
import { motion } from "framer-motion";

// Utilities
import { CampConext } from "../../../contexts/CampContext";

// Components
import { AddBox } from "../../AddBox";
import { DashboardMainMessage } from "../DashboardMainMessage";
import { DashboardBox } from "../DashboardBox";

export const DashboardMain = () => {
  const { camp, getCompetition } = useContext(CampConext);
  const idUser = localStorage.getItem("@EZ:USERID");

  useEffect(() => {
    getCompetition(Number(idUser));
  }, [getCompetition, idUser]);

  return camp.length ? (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center tablet:justify-start flex-wrap mx-4 tablet:mr-8 tablet:ml-44 gap-10"
    >
      {camp.map((tournament) => (
        <DashboardBox
          tournament={tournament}
          key={tournament.id}
        />
      ))}
      <AddBox />
    </motion.div>
  ) : (
    <DashboardMainMessage />
  );
};
