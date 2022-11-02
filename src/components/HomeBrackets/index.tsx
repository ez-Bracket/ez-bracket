import Brackets from '../../assets/brackets.svg';
import { ButtonDefault } from '../Button';

export const HomeBrackets = () => {
  const handleClick = () => {};

  return (
    <section className="max-w-7xl m-auto px-4 py-[60px]">
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
          <ButtonDefault text="Crie o seu torneio" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};
