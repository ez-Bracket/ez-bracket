import { useContext, useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { ContextModal } from '../../../contexts/ModalContext';
import { CampConext } from '../../../contexts/CampContext';
import { Colors } from '../../../themes/themes';

export const ModalDeleteCamp = () => {
  const { isOpenDeleteCamp, onCloseDeleteCamp } = useContext(ContextModal);
  const { deleteCompetition } = useContext(CampConext);
  const { idCamp } = useContext(CampConext);
  const finalRef = useRef(null);

  const onSubmitDelete = () => {
    deleteCompetition(idCamp);
    onCloseDeleteCamp();
  };

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpenDeleteCamp}
        onClose={onCloseDeleteCamp}
      >
        <ModalOverlay />
        <ModalContent
          maxW={550}
          mx={4}
          p={3}
          px={[0, 3]}
          border={`2px solid ${Colors.green100}`}
          bg={Colors.gray300}
        >
          <ModalHeader className="text-green-100 mt-9 mb-0">
            <h2 className="text-2xl tablet:text-3xl text-center">
              Deletar torneio
            </h2>
          </ModalHeader>
          <ModalCloseButton
            className="mt-3 mr-2 bg-green-100 text-gray-300"
            borderRadius={50}
            bg={Colors.green100}
            _hover={{ bg: Colors.green300 }}
            transition="0.3s ease"
          />
          <ModalBody>
            <p className="text-xl tablet:text-2xl text-center text-white mt-8 mb-5">
              Deseja realmente deletar esse torneio?
            </p>
          </ModalBody>

          <ModalFooter w="100%">
            <div className="flex w-[90%] justify-between mx-auto pb-9 gap-3">
              <Button
                bg={Colors.green100}
                w="50%"
                h="55px"
                mr={3}
                onClick={onSubmitDelete}
                _hover={{
                  filter: 'auto',
                  brightness: '70%',
                }}
                transition="0.3s ease"
              >
                <p className="text-gray-300 text-xl font-medium">Sim</p>
              </Button>
              <Button
                bg={Colors.error100}
                w="50%"
                h="55px"
                mr={3}
                onClick={onCloseDeleteCamp}
                _hover={{
                  filter: 'auto',
                  brightness: '80%',
                }}
                transition="0.3s ease"
              >
                <p className="text-gray-300 text-xl font-medium">Não</p>
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
