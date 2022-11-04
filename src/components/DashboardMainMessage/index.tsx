import { ButtonDefault } from '../Button';
import { useContext } from 'react';
import { ContextModal } from '../../contexts/ModalContext';

export const DashboardMainMessage = () => {
  const { onOpenNewCamp } = useContext(ContextModal);
  return (
    <div className="relative flex flex-col justify-center tablet:justify-start flex-wrap mx-4 tablet:mr-8 tablet:ml-44 gap-10">
      <h2 className="text-white text-xl flex items-center gap-[5px] font-medium tablet:text-4xl">
        Você ainda não possui nenhum torneio criado :(
      </h2>
      <ButtonDefault
        className=" max-w-max hover:scale-105"
        onClick={onOpenNewCamp}
        text="Crie o seu torneio"
      ></ButtonDefault>
    </div>
  );
};
