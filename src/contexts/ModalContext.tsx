import { createContext } from "react";
import { useDisclosure } from "@chakra-ui/react";

interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalContext {
  isOpenRegister: boolean;
  isOpenLogin: boolean;
  isOpenNewCamp: boolean;
  isOpenInfoUser: boolean;
  onOpenRegister: () => void;
  onCloseRegister: () => void;
  onOpenLogin: () => void;
  onCloseLogin: () => void;
  onOpenNewCamp: () => void;
  onCloseNewCamp: () => void;
  onOpenInfoUser: () => void;
  onCloseInfoUser: () => void;
}

export const ContextModal = createContext<iModalContext>(
  {} as iModalContext
);

export const ModalProvider = ({
  children,
}: iModalContextProps) => {
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

  const {
    isOpen: isOpenNewCamp,
    onOpen: onOpenNewCamp,
    onClose: onCloseNewCamp,
  } = useDisclosure();

  const {
    isOpen: isOpenInfoUser,
    onOpen: onOpenInfoUser,
    onClose: onCloseInfoUser,
  } = useDisclosure();

  return (
    <ContextModal.Provider
      value={{
        isOpenRegister,
        onOpenRegister,
        onCloseRegister,
        isOpenLogin,
        onOpenLogin,
        onCloseLogin,
        isOpenNewCamp,
        onOpenNewCamp,
        onCloseNewCamp,
        isOpenInfoUser,
        onOpenInfoUser,
        onCloseInfoUser,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
};
