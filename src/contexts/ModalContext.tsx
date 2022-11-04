import { createContext, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

interface iModalContextProps {
  children: React.ReactNode;
}

interface iModalContext {
  isOpenRegister: boolean;
  isOpenLogin: boolean;
  isOpenNewCamp: boolean;
  isOpenInfoUser: boolean;
  isOpenDeleteCamp: boolean;
  isOpenEditUser: boolean;
  isOpenInfoCamp: boolean;

  onOpenRegister: () => void;
  onCloseRegister: () => void;
  onOpenLogin: () => void;
  onCloseLogin: () => void;
  onOpenNewCamp: () => void;
  onCloseNewCamp: () => void;
  onOpenInfoUser: () => void;
  onCloseInfoUser: () => void;
  onOpenDeleteCamp: () => void;
  onCloseDeleteCamp: () => void;
  onOpenEditUser: () => void;
  onCloseEditUser: () => void;
  onOpenInfoCamp: () => void;
  onCloseInfoCamp: () => void;
}

export const ContextModal = createContext<iModalContext>(
  {} as iModalContext
);

export const ModalProvider = ({
  children,
}: iModalContextProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    onCloseLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

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

  const {
    isOpen: isOpenEditUser,
    onOpen: onOpenEditUser,
    onClose: onCloseEditUser,
  } = useDisclosure();

  const {
    isOpen: isOpenDeleteCamp,
    onOpen: onOpenDeleteCamp,
    onClose: onCloseDeleteCamp,
  } = useDisclosure();

  const {
    isOpen: isOpenInfoCamp,
    onOpen: onOpenInfoCamp,
    onClose: onCloseInfoCamp,
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
        isOpenDeleteCamp,
        onOpenDeleteCamp,
        onCloseDeleteCamp,
        isOpenEditUser,
        onOpenEditUser,
        onCloseEditUser,
        isOpenInfoCamp,
        onOpenInfoCamp,
        onCloseInfoCamp,
      }}
    >
      {children}
    </ContextModal.Provider>
  );
};
