import { ButtonDefault } from '../../Button';
import { useContext } from 'react';
import { ContextModal } from '../../../contexts/ModalContext';
import { motion } from 'framer-motion';

export const DashboardMainMessage = () => {
  const { onOpenNewCamp } = useContext(ContextModal);
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col justify-center tablet:justify-start flex-wrap mx-4 tablet:mr-8 tablet:ml-44 gap-10"
    >
      <h2 className="text-white text-xl flex items-center gap-[5px] font-medium tablet:text-4xl">
        Você ainda não possui nenhum torneio criado :(
      </h2>
      <ButtonDefault
        className=" max-w-max hover:scale-105"
        onClick={onOpenNewCamp}
        text="Crie o seu torneio"
      ></ButtonDefault>
    </motion.div>
  );
};
