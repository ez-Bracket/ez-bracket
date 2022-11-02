import { useDisclosure } from '@chakra-ui/react';
import { ContentBoxDiv } from '../../components/ContentBoxDiv';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { HomeBrackets } from '../../components/HomeBrackets';
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
      <Header onOpenRegister={onOpenRegister} onOpenLogin={onOpenLogin} />
      <ContentBoxDiv />
      <HomeBrackets onOpen={onOpenRegister} />
      <Footer />
      <ModalLogin isOpen={isOpenLogin} onClose={onCloseLogin} />
      <ModalRegister isOpen={isOpenRegister} onClose={onCloseRegister} />
    </div>
  );
};
