import { useRef } from "react";
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
  Select,
} from "@chakra-ui/react";

export const NewCampModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Button ml={4} ref={finalRef}>
        I'll receive focus on close
      </Button>

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
          <div className="m-auto ">
            <ModalHeader className="text-green-100   mt-10 mb-0">
              <p className="text-3xl">
                Crie um novo torneio
              </p>
            </ModalHeader>

            <ModalCloseButton
              className="mt-6 bg-green-100 text-gray-300"
              borderRadius={50}
              _hover={{ bg: "#38F892" }}
              transition="0.5s ease"
            />
          </div>

          <form className="w-[100%]">
            <ModalBody className="mt-8 mb-6 mx-auto">
              <FormControl>
                <FormLabel className="text-green-100">
                  Nome do torneio
                </FormLabel>

                <Input
                  placeholder="Digite o nome do torneio"
                  _placeholder={{ color: "#c7c7c7" }}
                  borderColor="#353149"
                  bg="#353149"
                  height="60px"
                  color="#c7c7c7"
                />
              </FormControl>

              <FormControl
                mt={4}
                w="100%"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <div className="max-w-[45%]">
                  <FormLabel>
                    <p className="text-green-100">
                      Participantes
                    </p>
                  </FormLabel>

                  <Select
                    placeholder="Quantidade de participantes"
                    _focus={{ color: "#353149" }}
                    color="#c7c7c7"
                    h="60px"
                    w="100%"
                  >
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                  </Select>
                </div>

                <div className="max-w-[45%]">
                  <FormLabel>
                    <p className="text-green-100">
                      Data de início
                    </p>
                  </FormLabel>

                  <Input
                    type="date"
                    color="#c7c7c7"
                    h="60px"
                    w="100%"
                    css={{
                      "::-webkit-calendar-picker-indicator":
                        {
                          cursor: "pointer",
                          color: "#c7c7c7",
                          background: `url(https://cdn1.iconfinder.com/data/icons/time-and-date-ii/24/Material_icons-03-70-256.png)center/100% no-repeat `,
                        },
                    }}
                  />
                </div>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="text-green-100">
                  Descrição
                </FormLabel>

                <Input
                  placeholder="Adicione uma descrição do torneio"
                  _placeholder={{ color: "#c7c7c7" }}
                  borderColor="#353149"
                  bg="#353149"
                  height="160px"
                  color="#c7c7c7"
                />
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
                fontWeight="500"
                w="100%"
                h="49px"
                mb={10}
                _hover={{
                  bg: "#38F892",
                  fontWeight: "700",
                }}
                transition="0.9s ease"
              >
                Criar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
