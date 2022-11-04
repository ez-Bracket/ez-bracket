import { HiOutlineMail } from 'react-icons/hi';
import { Button } from '@chakra-ui/button';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/modal';

import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ContextModal } from '../../contexts/ModalContext';

export const InfoUserModal = () => {
  const { isOpenInfoUser, onCloseInfoUser, onOpenRegister } =
    useContext(ContextModal);

  const { user } = useContext(UserContext);

  const handleClick = () => {
    onCloseInfoUser();
    onOpenRegister();
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
              bg="#221E34"
            >
              <ModalCloseButton
                className="mt-5 mr-5 bg-green-100 text-gray-300"
                borderRadius={50}
                h={6}
                w={6}
                _hover={{ bg: '#38F892' }}
                transition="0.3s ease"
              />
              <ModalBody className="mt-4 mb-4 flex flex-col items-center gap-5">
                <img
                  src={profile.imgUrl}
                  alt="Imagem de Perfil"
                  className="w-40 h-40 rounded-full"
                />
                <div className="flex flex-col items-center gap-4">
                  <h2 className="text-white text-xl tablet:text-3xl">
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
                bg="#61FFAA"
                onClick={handleClick}
                mb={5}
                color="#08490e"
                fontWeight="500"
                fontSize="18px"
                _hover={{ bg: '#38F892' }}
                _active={{ bg: '#38F892' }}
              >
                Editar
              </Button>
            </ModalContent>
          </Modal>
        ))}
    </>
  );
};
