import { ContentBox } from "../../components/ContentBox";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HomeBrackets } from "../../components/HomeBrackets";
import { AiOutlineTrophy } from "react-icons/ai";
import { ContentBoxDiv } from "../../components/ContentBoxDiv";

export const HomePage = () => {
  return (
    <>
      <Header />
      <ContentBoxDiv />
      <HomeBrackets />
      <Footer />
    </>
  );
};
