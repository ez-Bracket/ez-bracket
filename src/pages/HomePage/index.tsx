// Components
import { ContentBoxDiv } from "../../components/ContentBoxDiv";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeBrackets } from "../../components/HomeBrackets";
import { HomeMain } from "../../components/HomeMain";
import { ModalLogin } from "../../components/ModalLogin";
import { ModalRegister } from "../../components/ModalRegister";

export const HomePage = () => {
  return (
    <div className="bg-gray-300">
      <div className="bg-home bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
      <Header />
      <HomeMain />
      <ContentBoxDiv />
      <HomeBrackets />
      <Footer />
      <ModalLogin />
      <ModalRegister
        title="Crie a sua conta"
        buttonDesc="Criar"
        isRegister={true}
      />
    </div>
  );
};
