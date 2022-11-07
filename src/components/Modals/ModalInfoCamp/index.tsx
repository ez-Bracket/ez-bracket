import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CampConext } from "../../../contexts/CampContext";
import { ContextModal } from "../../../contexts/ModalContext";

export const InfoModal = () => {
  const { isOpenInfoCamp, onCloseInfoCamp } = useContext(ContextModal);

  const { camp } = useContext(CampConext);
  const { idCamp } = useParams();

  const championship = camp.filter((camp) => camp.id === Number(idCamp));

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
            _hover={{ bg: "#38F892" }}
            transition="0.3s ease"
          />
          <ModalBody>
            <p className="text-white text-base tablet:text-xl p-4 mb-4">
              {championship[0].description === ""
                ? `Não há descrição no torneio`
                : championship[0].description.toString()}
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
