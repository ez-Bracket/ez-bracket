import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export const InfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Trigger modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW={573}
          m="auto"
          minH="450px"
          border="2px solid #61FFAA"
          bg="#221E34"
        >
          <ModalHeader className="text-green-100 mt-9 mb-0">
            <p className="text-3xl text-center">
              Informações
            </p>
          </ModalHeader>
          <ModalCloseButton
            className="mt-5 mr-5 bg-green-100 text-gray-300"
            borderRadius={50}
            _hover={{ bg: "#38F892" }}
            transition="0.5s ease"
          />
          <ModalBody>
            <p className="text-white">
              Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make
              a type specimen book. It has survived not only
              five centuries, but also the leap into
              electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing
              Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
