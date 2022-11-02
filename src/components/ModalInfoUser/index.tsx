import { HiOutlineMail } from "react-icons/hi";
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/modal";

import FotoTeste from "../../assets/Teste foto time 1.svg";

export const InfoUserModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
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
            <img src={FotoTeste} alt="" />
            <div className="flex flex-col gap-4">
              <h2 className="text-white">
                Nome do usuário
              </h2>
              <div className="flex items-center gap-2">
                <HiOutlineMail color="#61FFAA" size={24} />
                <p className="text-white">
                  email@email.com
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
              onClick={onClose}
              p="20px"
              maxW="190px"
              w="80%"
              _hover={{ bg: "#38F892" }}
              _active={{ bg: "#38F892" }}
            >
              Entrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
