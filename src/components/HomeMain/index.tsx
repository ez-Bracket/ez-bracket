import { motion } from 'framer-motion';
import { Button } from '@chakra-ui/react';
import 'animate.css';

interface IHomeMain {
  onOpenRegister: () => void;
}

export const HomeMain = ({ onOpenRegister }: IHomeMain) => {
  return (
    <main className="bg-home bg-cover flex flex-col items-center justify-center h-screen relative -top-[120px]">
      <div className="absolute bg-gray-300 h-screen w-full opacity-90 shadow-[0_100px_100px_#1D1B2D]"></div>
      <motion.h1
        className="text-green-100 text-4xl laptop:text-5xl text-center font-bold tablet:w-[24ch] mx-3 mt-10 relative"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gerencie os seus torneios de forma rápida e gratuita!
      </motion.h1>
      <motion.p
        className="mt-4 mb-16 text-center text-xl tablet:text-xl text-gray-100 relative mx-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Crie os seus campeonatos, convide os seus amigos e se divirta!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Button
          className="w-[300px] tablet:w-[350px] text-base tablet:text-2xl"
          variant="outline"
          borderColor="#61FFAA"
          border="2px solid"
          textColor="#61FFAA"
          height="80px"
          fontWeight="semibold"
          fontSize="18px"
          _hover={{ bgColor: '#61FFAA', textColor: '#08490e' }}
          transition="0.3s ease"
          _active={{ bgColor: '#61FFAA' }}
          onClick={onOpenRegister}
        >
          Comece agora!
        </Button>
      </motion.div>
    </main>
  );
};
