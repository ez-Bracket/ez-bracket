import { useContext } from "react";

// Utilities
import { UserContext } from "../../contexts/UserContext";
import { useProtectedRoutes } from "../../hooks/useProtectedRoutes";

// Components
import { ContentBoxDiv } from "../../components/ContentBoxDiv";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeBrackets } from "../../components/Home Components/HomeBrackets";
import { HomeMain } from "../../components/Home Components/HomeMain";
import { ModalLogin } from "../../components/Modals/ModalLogin";
import { ModalRegister } from "../../components/Modals/ModalRegister";

export const HomePage = () => {
  const { isLogged } = useContext(UserContext);
  useProtectedRoutes(isLogged, false);

  return (
    <div className="bg-gray-300">
      <div className="bg-home bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
      <Header />
      <HomeMain />
      <ContentBoxDiv />
      <HomeBrackets />
      <Footer />
      <ModalLogin />
      <ModalRegister />
    </div>
  );
};
