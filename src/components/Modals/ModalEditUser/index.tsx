import { useContext, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";

// Utilities
import { UserContext } from "../../../contexts/UserContext";
import { ContextModal } from "../../../contexts/ModalContext";

// Components
import { MessageError } from "../../MessageError";

interface IdataEditUser {
  email?: string | undefined;
  name?: string | undefined;
  password?: string | undefined;
  confirmPassword?: string | undefined;
  imgUrl?: string | undefined;
}

export const ModalEdit = () => {
  const { isOpenEditUser, onCloseEditUser } =
    useContext(ContextModal);

  const [showPass, setShowPass] = useState(false);

  const [showConfirmPass, setShowConfirmPass] =
    useState(false);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleShowPass = () => setShowPass(!showPass);

  const handleShowConfirmPass = () =>
    setShowConfirmPass(!showConfirmPass);

  const { EditUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdataEditUser>();

  const onSubmit = (data: any) => {
    // EditUser(data);
    if (data.name?.length! > 0) {
      EditUser({ name: data.name });
    }
    if (data.email?.length! > 0) {
      EditUser({ email: data.email });
    }
    if (data.imgUrl?.length! > 0) {
      EditUser({ imgUrl: data.imgUrl });
    }
    if (data.password.length > 0) {
      EditUser({ password: data.password });
    }
    if (data.confirmPassword.length > 0) {
      EditUser({ confirmPassword: data });
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenEditUser}
        onClose={onCloseEditUser}
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
              <h2 className="text-xl tablet:text-2xl">
                Edite sua conta
              </h2>
            </ModalHeader>

            <ModalCloseButton
              className="mt-3 mr-2 bg-green-100 text-gray-300"
              borderRadius={50}
              h={6}
              w={6}
              _hover={{ bg: "#38F892" }}
              transition="0.3s ease"
            />
          </div>
          <form
            className="w-[100%]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <ModalBody className=" mt-1 laptop:mt-4 mb-4">
              <FormControl position="relative">
                <FormLabel
                  fontSize={16}
                  className="text-green-100"
                >
                  Nome de usuário
                </FormLabel>
                <Input
                  id="name"
                  placeholder="Digite o nome de usuário"
                  {...register("name")}
                  _placeholder={{
                    color: "#c7c7c7",
                    opacity: "50%",
                  }}
                  borderColor="#353149"
                  fontSize="14px"
                  bg="#353149"
                  height="50px"
                  color="#fff"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  className={
                    errors.email?.message
                      ? "text-error-100"
                      : "text-green-100"
                  }
                >
                  E-mail
                </FormLabel>
                <Input
                  id="email"
                  placeholder="Digite o seu e-mail"
                  {...register("email")}
                  _placeholder={{
                    color: "#c7c7c7",
                    opacity: "50%",
                  }}
                  fontSize="14px"
                  borderColor={
                    errors.email?.message
                      ? "#E64980"
                      : "#353149"
                  }
                  bg="#353149"
                  height="50px"
                  color={
                    errors.email?.message
                      ? "#E64980"
                      : "#fff"
                  }
                  focusBorderColor={
                    errors.email?.message
                      ? "#E64980"
                      : "#c7c7c7"
                  }
                />
                {errors.email?.message && (
                  <MessageError
                    error={errors.email?.message}
                  ></MessageError>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  className={
                    errors.imgUrl?.message
                      ? "text-error-100"
                      : "text-green-100"
                  }
                >
                  Foto de perfil
                </FormLabel>
                <Input
                  id="imgUrl"
                  placeholder="URL da foto de perfil"
                  {...register("imgUrl")}
                  _placeholder={{
                    color: "#c7c7c7",
                    opacity: "50%",
                  }}
                  fontSize="14px"
                  borderColor={
                    errors.imgUrl?.message
                      ? "#E64980"
                      : "#353149"
                  }
                  bg="#353149"
                  height="50px"
                  color={
                    errors.imgUrl?.message
                      ? "#E64980"
                      : "#fff"
                  }
                  focusBorderColor={
                    errors.imgUrl?.message
                      ? "#E64980"
                      : "#c7c7c7"
                  }
                />
                {errors.imgUrl?.message && (
                  <MessageError
                    error={errors.imgUrl?.message}
                  ></MessageError>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  className={
                    errors?.password?.message
                      ? "text-error-100"
                      : "text-green-100"
                  }
                >
                  Senha
                </FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                    _placeholder={{
                      color: "#c7c7c7",
                      opacity: "50%",
                    }}
                    fontSize="14px"
                    borderColor={
                      errors?.password?.message
                        ? "#E64980"
                        : "#353149"
                    }
                    bg="#353149"
                    height="50px"
                    color={
                      errors?.password?.message
                        ? "#E64980"
                        : "#fff"
                    }
                    focusBorderColor={
                      errors?.password?.message
                        ? "#E64980"
                        : "#c7c7c7"
                    }
                    type={showPass ? "text" : "password"}
                  />
                  <InputRightElement>
                    <Button
                      onClick={handleShowPass}
                      bg="transparent"
                      padding={0}
                      _hover={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
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
                {errors.password?.message && (
                  <MessageError
                    error={errors.password?.message}
                  ></MessageError>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  className={
                    errors.confirmPassword?.message
                      ? "text-error-100"
                      : "text-green-100"
                  }
                >
                  Confirme sua senha
                </FormLabel>
                <InputGroup>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                    _placeholder={{
                      color: "#c7c7c7",
                      opacity: "50%",
                    }}
                    fontSize="14px"
                    borderColor={
                      errors?.confirmPassword?.message
                        ? "#E64980"
                        : "#353149"
                    }
                    bg="#353149"
                    height="50px"
                    color={
                      errors?.confirmPassword?.message
                        ? "#E64980"
                        : "#fff"
                    }
                    focusBorderColor={
                      errors?.confirmPassword?.message
                        ? "#E64980"
                        : "#c7c7c7"
                    }
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
                      top="5px"
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
                {errors.confirmPassword?.message && (
                  <MessageError
                    error={errors.confirmPassword?.message}
                  ></MessageError>
                )}
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
                onClick={onCloseEditUser}
                type="submit"
                bg="#61FFAA"
                color="#08490e"
                fontWeight="500"
                fontSize="18px"
                w="100%"
                h="49px"
                mb={5}
                _hover={{
                  bg: "#38F892",
                }}
                _active={{ bgColor: "#61FFAA" }}
                transition="0.3s ease"
              >
                Editar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
