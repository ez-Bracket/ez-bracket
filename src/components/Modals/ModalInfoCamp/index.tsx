import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { iCamp } from '../../../contexts/CampContext';
import { ContextModal } from '../../../contexts/ModalContext';
import { Colors } from '../../../themes/themes';

interface IInfoModalProps {
  currentCamp: iCamp | null;
}

export const InfoModal = ({ currentCamp }: IInfoModalProps) => {
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
          border={`2px solid ${Colors.green100}`}
          bg={Colors.gray300}
        >
          <ModalHeader className="text-green-100">
            <h2 className="text-xl text-center tablet:text-2xl">Informações</h2>
          </ModalHeader>
          <ModalCloseButton
            className="mt-5 mr-5 bg-green-100 text-gray-300"
            borderRadius={50}
            h={6}
            w={6}
            bg={Colors.green100}
            _hover={{ bg: Colors.green300 }}
            transition="0.3s ease"
          />
          <ModalBody>
            <p className="text-white text-base tablet:text-xl p-4 mb-4">
              {currentCamp?.description === ''
                ? `Não há nenhuma descrição do torneio.`
                : currentCamp?.description.toString()}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
