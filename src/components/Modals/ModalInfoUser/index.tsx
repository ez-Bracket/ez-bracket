import { useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/modal";

// Utilities
import { ContextModal } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { Colors } from "../../../themes/themes";

// Components
import imgDefault from "../../../assets/default.jpg";

export const InfoUserModal = () => {
  const {
    isOpenInfoUser,
    onCloseInfoUser,
    onOpenEditUser,
  } = useContext(ContextModal);

  const { user } = useContext(UserContext);

  const handleClick = () => {
    onCloseInfoUser();
    onOpenEditUser();
  };

  return (
    <>
      {user &&
        user.map((profile) => (
          <Modal
            key={profile.id}
            isOpen={isOpenInfoUser}
            onClose={onCloseInfoUser}
          >
            <ModalOverlay />
            <ModalContent
              className="flex items-center mx-4 p-3 border-2 border-green-100"
              bg={Colors.gray300}
            >
              <ModalCloseButton
                className="mt-5 mr-5 text-gray-300"
                borderRadius={50}
                h={6}
                w={6}
                bg={Colors.green100}
                _hover={{ bg: Colors.green300 }}
                transition="0.3s ease"
              />
              <ModalBody className="mt-4 mb-4 flex flex-col items-center gap-5">
                <img
                  src={
                    profile.imgUrl
                      ? profile.imgUrl
                      : imgDefault
                  }
                  alt="Imagem de Perfil"
                  className="w-40 h-40 rounded-full"
                />
                <div className="flex flex-col items-center gap-4">
                  <h2 className="text-white text-xl tablet:text-3xl max-w-[25ch] overflow-hidden text-ellipsis whitespace-nowrap">
                    {profile.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <HiOutlineMail className="text-green-100 text-2xl" />
                    <p className="text-white text-base tablet:text-xl">
                      {profile.email}
                    </p>
                  </div>
                </div>
              </ModalBody>

              <Button
                className="w-[200px] tablet:max-w-[250px]"
                bg={Colors.green100}
                onClick={handleClick}
                mb={5}
                color={Colors.green200}
                fontWeight="500"
                fontSize="18px"
                _hover={{ bg: Colors.green300 }}
                _active={{ bg: Colors.green300 }}
              >
                Editar
              </Button>
            </ModalContent>
          </Modal>
        ))}
    </>
  );
};
