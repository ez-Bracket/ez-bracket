import { useRef, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

interface IModalLogin {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalLogin = ({ isOpen, onClose }: IModalLogin) => {
  const [showPass, setShowPass] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const handleShowPass = () => setShowPass(!showPass);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          maxW={550}
          mx={4}
          p={3}
          px={[0, 3]}
          border="2px solid #61FFAA"
          bg="#221E34"
        >
          <div className="m-auto text-xl">
            <ModalHeader className="text-green-100">
              <h2 className="text-xl tablet:text-2xl">Entre na sua conta</h2>
            </ModalHeader>

            <ModalCloseButton
              className="mt-3 mr-2 bg-green-100 text-gray-300"
              borderRadius={50}
              h={6}
              w={6}
              _hover={{ bg: '#38F892' }}
              transition="0.3s ease"
            />
          </div>

          <form className="w-[100%]">
            <ModalBody className=" mt-1 laptop:mt-4 mb-4">
              <FormControl position="relative">
                <FormLabel fontSize={16} className="text-green-100">
                  Nome de usuário
                </FormLabel>
                <Input
                  placeholder="Digite o nome de usuário"
                  _placeholder={{ color: '#c7c7c7', opacity: '50%' }}
                  borderColor="#353149"
                  bg="#353149"
                  fontSize="14px"
                  height="50px"
                  color="#c7c7c7"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="text-green-100">Senha</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Digite sua senha"
                    _placeholder={{ color: '#c7c7c7', opacity: '50%' }}
                    borderColor="#353149"
                    bg="#353149"
                    fontSize="14px"
                    height="50px"
                    color="#c7c7c7"
                    type={showPass ? 'text' : 'password'}
                  />
                  <InputRightElement>
                    <Button
                      onClick={handleShowPass}
                      bg="transparent"
                      padding={0}
                      _hover={{ bg: 'transparent' }}
                      _active={{ bg: 'transparent' }}
                      top="5px"
                      right="10px"
                    >
                      {showPass ? (
                        <BsEyeSlash className=" text-gray-100" />
                      ) : (
                        <BsEye className=" text-gray-100" />
                      )}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </ModalBody>

            <ModalFooter
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              w="100%"
              color="#c7c7c7"
              fontSize="14px"
            >
              <Button
                type="submit"
                bg="#61FFAA"
                color="#221E34"
                fontWeight="500"
                fontSize="18px"
                w="100%"
                h="49px"
                mb={5}
                _hover={{
                  bg: '#38F892',
                }}
                transition="0.3s ease"
              >
                Entrar
              </Button>
              <p>Já possui conta? Faça o login</p>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
