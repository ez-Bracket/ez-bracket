import { useDisclosure } from '@chakra-ui/react';
import { ContentBoxDiv } from '../../components/ContentBoxDiv';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HomeBrackets } from '../../components/HomeBrackets';
import { HomeMain } from '../../components/HomeMain';
import { ModalLogin } from '../../components/ModalLogin';
import { ModalRegister } from '../../components/ModalRegister';

export const HomePage = () => {
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();

  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  return (
    <div className="bg-gray-300">
      <div className="bg-home bg-cover h-screen w-full absolute opacity-10 shadow-[0_100px_100px_#070516]"></div>
      <Header onOpenRegister={onOpenRegister} onOpenLogin={onOpenLogin} />
      <HomeMain onOpenRegister={onOpenRegister} />
      <ContentBoxDiv />
      <HomeBrackets onOpen={onOpenRegister} />
      <Footer />
      <ModalLogin
        isOpen={isOpenLogin}
        onClose={onCloseLogin}
        onOpenRegister={onOpenRegister}
      />
      <ModalRegister
        isOpen={isOpenRegister}
        onClose={onCloseRegister}
        onOpenLogin={onOpenLogin}
      />
    </div>
  );
};
