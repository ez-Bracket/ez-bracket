import { ButtonDefault } from "../Button";
import { BiSad } from "react-icons/bi";

export const DashboardMainMessage = () => {
  return (
    <div className="flex flex-col justify-center tablet:justify-start flex-wrap mx-4 tablet:mr-8 tablet:ml-44 gap-10">
      <h2 className="text-white text-xl flex items-center gap-[5px] font-medium desktop:text-4xl">
        Você ainda não possui nenhum torneio criado.
        <BiSad className="text-5xl" />
      </h2>
      <ButtonDefault
        className=" max-w-max"
        onClick={(onclick = () => console.log("a"))}
        text="Crie o seu torneio"
      ></ButtonDefault>
    </div>
  );
};
