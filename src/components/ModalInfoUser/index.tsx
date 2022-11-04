import { useContext } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";

// Components
import { UserContext } from "../../contexts/UserContext";
import { ContextModal } from "../../contexts/ModalContext";

export const InfoUserModal = () => {
  const {
    isOpenInfoUser,
    onCloseInfoUser,
    onOpenRegister,
  } = useContext(ContextModal);

  const { user } = useContext(UserContext);

  const handleClick = () => {
    onCloseInfoUser();
    onOpenRegister();
  };

  return (
    <>
      {user &&
        user.map((profile) => (
          <>
            <Modal
              isOpen={isOpenInfoUser}
              onClose={onCloseInfoUser}
            >
              <ModalOverlay />
              <ModalContent
                maxW={573}
                m="auto"
                minH="350px"
                border="2px solid #61FFAA"
                bg="#221E34"
              >
                <ModalCloseButton
                  className="mt-5 mr-5 bg-green-100 text-gray-300"
                  borderRadius={50}
                  _hover={{ bg: "#38F892" }}
                  transition="0.5s ease"
                />
                <ModalBody
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  flexWrap="wrap"
                  w="100%"
                  gap={10}
                  pt="40px"
                  pl="40px"
                  pb="0"
                >
                  <img
                    src={profile.imgUrl}
                    alt=""
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="flex flex-col gap-4">
                    <h2 className="text-white">
                      {profile.name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <HiOutlineMail
                        color="#61FFAA"
                        size={24}
                      />
                      <p className="text-white">
                        {profile.email}
                      </p>
                    </div>
                  </div>
                </ModalBody>

                <ModalFooter
                  justifyContent="flex-start"
                  mb="20px"
                  ml="20px"
                  w="100%"
                >
                  <Button
                    bg="#61FFAA"
                    onClick={handleClick}
                    p="20px"
                    maxW="190px"
                    w="80%"
                    _hover={{ bg: "#38F892" }}
                    _active={{ bg: "#38F892" }}
                  >
                    Editar
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        ))}
    </>
  );
};
