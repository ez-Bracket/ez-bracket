import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { ContextModal } from '../../../contexts/ModalContext';

export const InfoModal = () => {
  const { isOpenInfoCamp, onCloseInfoCamp } = useContext(ContextModal);

  return (
    <>
      <Modal onClose={onCloseInfoCamp} isOpen={isOpenInfoCamp} isCentered>
        <ModalOverlay />
        <ModalContent
          maxW={550}
          mx={4}
          p={3}
          px={[0, 3]}
          border="2px solid #61FFAA"
          bg="#221E34"
        >
          <ModalHeader className="text-green-100">
            <h2 className="text-xl text-center tablet:text-2xl">Informações</h2>
          </ModalHeader>
          <ModalCloseButton
            className="mt-5 mr-5 bg-green-100 text-gray-300"
            borderRadius={50}
            h={6}
            w={6}
            bg="#61FFAA"
            _hover={{ bg: '#38F892' }}
            transition="0.3s ease"
          />
          <ModalBody>
            <p className="text-white text-base tablet:text-xl p-4 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
