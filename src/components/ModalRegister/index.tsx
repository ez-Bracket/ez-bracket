import { useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

export const RegisterModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [showPass, setShowPass] = useState(false);

  const [showConfirmPass, setShowConfirmPass] =
    useState(false);

  const handleShowPass = () => setShowPass(!showPass);

  const handleShowConfirmPass = () =>
    setShowConfirmPass(!showConfirmPass);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent
          maxW={573}
          m="auto"
          border="2px solid #61FFAA"
          bg="#221E34"
        >
          <div className="m-auto text-xl">
            <ModalHeader className="text-green-100 mt-10 mb-0">
              <p className="text-3xl">Crie a sua conta</p>
            </ModalHeader>

            <ModalCloseButton
              className="mt-6 bg-green-100 text-gray-300"
              borderRadius={50}
            />
          </div>
          <form className="w-[100%]">
            <ModalBody className="mt-8 mb-6 mx-auto">
              <FormControl>
                <FormLabel className="text-green-100">
                  Nome de usuário
                </FormLabel>
                <Input
                  placeholder="Digite o nome de usuário"
                  _placeholder={{ color: "#c7c7c7" }}
                  borderColor="#353149"
                  bg="#353149"
                  height="60px"
                  color="#c7c7c7"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="text-green-100">
                  E-mail
                </FormLabel>
                <Input
                  placeholder="Digite o nome de usuário"
                  _placeholder={{ color: "#c7c7c7" }}
                  borderColor="#353149"
                  bg="#353149"
                  height="60px"
                  color="#c7c7c7"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="text-green-100">
                  Foto de perfil
                </FormLabel>
                <Input
                  placeholder="Digite o nome de usuário"
                  _placeholder={{ color: "#c7c7c7" }}
                  borderColor="#353149"
                  bg="#353149"
                  height="60px"
                  color="#c7c7c7"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="text-green-100">
                  Senha
                </FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Digite sua senha"
                    _placeholder={{ color: "#c7c7c7" }}
                    borderColor="#353149"
                    bg="#353149"
                    height="60px"
                    color="#c7c7c7"
                    type={showPass ? "text" : "password"}
                  />
                  <InputRightElement>
                    <Button
                      onClick={handleShowPass}
                      bg="transparent"
                      padding={0}
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                      top="10px"
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

              <FormControl mt={4}>
                <FormLabel className="text-green-100">
                  Confirme sua senha
                </FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Confirme sua senha"
                    _placeholder={{ color: "#c7c7c7" }}
                    borderColor="#353149"
                    bg="#353149"
                    height="60px"
                    color="#c7c7c7"
                    type={
                      showConfirmPass ? "text" : "password"
                    }
                  />
                  <InputRightElement
                    display="flex"
                    alignItems="center"
                  >
                    <Button
                      onClick={handleShowConfirmPass}
                      bg="transparent"
                      padding={0}
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                      top="10px"
                      right="10px"
                    >
                      {showConfirmPass ? (
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
              mb={10}
              color="#c7c7c7"
              fontSize="14px"
              paddingBottom=""
            >
              <Button
                bg="#61FFAA"
                color="#221E34"
                w="100%"
                h="49px"
                mb={10}
              >
                Save
              </Button>
              <p>Já possui conta? Faça o login</p>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
