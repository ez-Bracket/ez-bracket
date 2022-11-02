import Chaveamento from "../assets/Chaveamento.svg";

//mt-14 mr-25 mb-5 ml-5
export const FooterHomePage = () => {
  return (
    <div>
      <div className="mt-5 mr-24 mb-5 ml-9 laptop:mt-14 laptop:mr-98 laptop:mb-5 laptop:ml-20 ">
        <h1 className="text-3xl text-white laptop:text-5xl">
          Chaveamento simples e de fácil organização
        </h1>
      </div>
      <div className="mb-9 laptop:flex laptop:max-w-7xl laptop:ml-20 laptop:mb-28 laptop:mt-20">
        <div className="hidden tablet:block mt-5 mr-24 mb-5  flex flex-col gap-5 laptop:w-full laptop:">
          <img src={Chaveamento} alt="" />
        </div>
        <div className="mt-5 mr-24 mb-5 ml-9 flex flex-col gap-5">
          <p className="text-gray-100 laptop:text-2xl">
            Nosso objetivo é simplificar a sua diversão.
          </p>
          <p className="text-gray-100 laptop:text-2xl">
            Chega de reunir seus amigos e organizar tudo com papel e caneta.
          </p>
          <button className=" flex-col gap-5 bg-green-100 w-44 pt-2.5 pr-6 pl-6 pb-2.5 rounded-lg ">
            Crie o seu torneio
          </button>
        </div>
      </div>
      <footer className="bg-gray-400 text-white text-center text-xs laptop:py-14">
        ezBracket © - Alguns direitos reservados
      </footer>
    </div>
  );
};
