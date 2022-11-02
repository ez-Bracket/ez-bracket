import Brackets from '../../assets/brackets.svg';
import { ButtonDefault } from '../Button';

interface IHomeBrackets {
  onOpen: () => void;
}

export const HomeBrackets = ({ onOpen }: IHomeBrackets) => {
  return (
    <section className="px-4 py-[60px] bg-gray-500 border-t-2 border-t-green-100 border-opacity-50">
      <div className="max-w-7xl m-auto ">
        <h1 className="text-4xl text-white">
          Chaveamento simples e de fácil organização
        </h1>
        <div className="my-[60px] flex gap-20 laptop:gap-[120px] laptop:items-center justify-between flex-col laptop:flex-row items-start">
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
            <ButtonDefault text="Crie o seu torneio" onClick={onOpen} />
          </div>
        </div>
      </div>
    </section>
  );
};