import { motion } from "framer-motion";
import { Button } from "@chakra-ui/react";
import "animate.css";
import { useContext } from "react";
import { ContextModal } from "../../contexts/ModalContext";

export const HomeMain = () => {
  const { onOpenRegister } = useContext(ContextModal);

  return (
    <main className="py-32 tablet:py-56 flex flex-col items-center justify-center">
      <motion.h1
        className="text-green-100 text-4xl laptop:text-5xl text-center font-bold tablet:w-[24ch] mx-3 relative"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Gerencie os seus torneios de forma rápida e
        gratuita!
      </motion.h1>
      <motion.p
        className="mt-4 mb-16 text-center text-xl tablet:text-xl text-gray-100 relative mx-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        Crie os seus campeonatos, convide os seus amigos e
        se divirta!
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
          _hover={{
            bgColor: "#61FFAA",
            textColor: "#08490e",
          }}
          transition="0.3s ease"
          _active={{ bgColor: "#61FFAA" }}
          onClick={onOpenRegister}
        >
          Comece agora!
        </Button>
      </motion.div>
    </main>
  );
};
