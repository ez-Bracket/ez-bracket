import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Brackets from '../../../assets/brackets.svg';
import { ContextModal } from '../../../contexts/ModalContext';
import { ButtonDefault } from '../../Button';

export const HomeBrackets = () => {
  const { onOpenRegister } = useContext(ContextModal);
  const { ref: sectionRef, inView: isVisible } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section
      ref={sectionRef}
      className="px-4 py-[60px] bg-gray-500 border-t-2 border-t-green-100 border-opacity-50"
    >
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl m-auto "
        >
          <h1 className="text-4xl text-white">
            Chaveamento simples e de fácil organização
          </h1>
          <div className="tablet:my-[60px] flex gap-20 laptop:gap-[120px] laptop:items-center justify-between flex-col laptop:flex-row items-start">
            <div className="hidden tablet:flex w-full">
              <img src={Brackets} alt="Exemplo de chaveamento" />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-gray-100 text-2xl">
                Nosso objetivo é simplificar a sua diversão.
              </p>
              <p className="text-gray-100 mb-5 text-2xl">
                Chega de reunir seus amigos e organizar tudo com papel e caneta.
              </p>
              <ButtonDefault
                className="w-max hover:scale-105"
                text="Crie o seu torneio"
                onClick={onOpenRegister}
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};
