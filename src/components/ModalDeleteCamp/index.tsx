import { useContext, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { ContextModal } from "../../contexts/ModalContext";
import { CampConext } from "../../contexts/CampContext";

export const ModalDeleteCamp = () => {
  const { isOpenDeleteCamp, onCloseDeleteCamp } = useContext(ContextModal);

  const { deleteCompetition } = useContext(CampConext);

  const onSubmitDelete = () => {
    onCloseDeleteCamp();
    const idCamp = 16;
    deleteCompetition(idCamp);
  };

  const finalRef = useRef(null);

  return (
    <>
      <Modal
        finalFocusRef={finalRef}
        isOpen={isOpenDeleteCamp}
        onClose={onCloseDeleteCamp}
      >
        <ModalOverlay />
        <ModalContent
          maxW={573}
          m="auto"
          h="450px"
          border="2px solid #61FFAA"
          bg="#221E34"
        >
          <ModalHeader className="text-green-100 mt-9 mb-0">
            <p className="text-3xl text-center">Deletar torneio</p>
          </ModalHeader>
          <ModalCloseButton
            className="mt-6 mr-7 bg-green-100 text-gray-300"
            borderRadius={50}
            _hover={{ bg: "#38F892" }}
            transition="0.5s ease"
          />
          <ModalBody>
            <p className="text-3xl text-center text-white mt-10">
              Deseja realmente deletar esse torneio?
            </p>
          </ModalBody>

          <ModalFooter w="100%">
            <div className="flex w-[90%] justify-between mx-auto pb-9 gap-3">
              <Button
                bg="#61FFAA"
                w="50%"
                h="55px"
                mr={3}
                onClick={onSubmitDelete}
                _hover={{
                  filter: "auto",
                  brightness: "70%",
                }}
                transition="0.3s ease"
              >
                <p className="text-gray-300 text-xl font-medium">Sim</p>
              </Button>
              <Button
                bg="#E64980"
                w="50%"
                h="55px"
                mr={3}
                onClick={onCloseDeleteCamp}
                _hover={{
                  filter: "auto",
                  brightness: "80%",
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
