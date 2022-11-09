import { useContext, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { ContextModal } from "../../../contexts/ModalContext";
import { UserContext } from "../../../contexts/UserContext";
import { Colors } from "../../../themes/themes";

// Components
import { MessageError } from "../../MessageError";

interface IDataEditUser {
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

  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("E-mail inválido"),
    password: yup
      .string()
      .strip()
      .min(8, "Deve conter no mínimo 8 caracteres")
      .matches(
        /[A-Z]/,
        "Deve conter ao menos uma letra maiúscula"
      )
      .matches(
        /[a-z]/,
        "Deve conter ao menos uma letra minúscula"
      )
      .matches(/[0-9]/, "Deve conter ao menos um número")
      .matches(
        /(\W)|_/,
        "Deve conter ao menos um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .strip()
      .oneOf(
        [yup.ref("password")],
        "As senhas não conferem"
      ),
    imgUrl: yup.string().url("URL inválida"),
  });

  const handleShowPass = () => setShowPass(!showPass);

  const handleShowConfirmPass = () =>
    setShowConfirmPass(!showConfirmPass);

  const { EditUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IDataEditUser>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IDataEditUser) => {
    if (data.name?.length! > 0) {
      EditUser({ name: data.name });
    }
    if (data.email?.length! > 0) {
      EditUser({ email: data.email });
    }
    if (data.imgUrl?.length! > 0) {
      EditUser({ imgUrl: data.imgUrl });
    }
    if (data.password?.length! > 0) {
      EditUser({ password: data.password });
    }
    if (data.confirmPassword?.length! > 0) {
      EditUser({ confirmPassword: data.confirmPassword });
    }
    onCloseEditUser();
    reset();
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
          border={`2px solid ${Colors.green100}`}
          bg={Colors.gray300}
        >
          <div className="m-auto text-xl">
            <ModalHeader className="text-green-100">
              <h2 className="text-xl tablet:text-2xl">
                Edite sua conta
              </h2>
            </ModalHeader>

            <ModalCloseButton
              className="mt-3 mr-2 text-gray-300"
              borderRadius={50}
              h={6}
              w={6}
              bg={Colors.green100}
              _hover={{ bg: Colors.green300 }}
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
                    color: Colors.gray100,
                    opacity: "50%",
                  }}
                  borderColor={Colors.gray200}
                  fontSize="14px"
                  bg={Colors.gray200}
                  height="50px"
                  color={Colors.white}
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
                    color: Colors.gray100,
                    opacity: "50%",
                  }}
                  fontSize="14px"
                  borderColor={
                    errors.email?.message
                      ? Colors.error100
                      : Colors.gray200
                  }
                  bg={Colors.gray200}
                  height="50px"
                  color={
                    errors.email?.message
                      ? Colors.error100
                      : Colors.white
                  }
                  focusBorderColor={
                    errors.email?.message
                      ? Colors.error100
                      : Colors.gray200
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
                    color: Colors.gray100,
                    opacity: "50%",
                  }}
                  fontSize="14px"
                  borderColor={
                    errors.imgUrl?.message
                      ? Colors.error100
                      : Colors.gray200
                  }
                  bg={Colors.gray200}
                  height="50px"
                  color={
                    errors.imgUrl?.message
                      ? Colors.error100
                      : Colors.white
                  }
                  focusBorderColor={
                    errors.imgUrl?.message
                      ? Colors.error100
                      : Colors.gray200
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
                      color: Colors.gray100,
                      opacity: "50%",
                    }}
                    fontSize="14px"
                    borderColor={
                      errors?.password?.message
                        ? Colors.error100
                        : Colors.gray200
                    }
                    bg={Colors.gray200}
                    height="50px"
                    color={
                      errors?.password?.message
                        ? Colors.error100
                        : Colors.white
                    }
                    focusBorderColor={
                      errors?.password?.message
                        ? Colors.error100
                        : Colors.gray200
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
                      color: Colors.gray100,
                      opacity: "50%",
                    }}
                    fontSize="14px"
                    borderColor={
                      errors?.confirmPassword?.message
                        ? Colors.error100
                        : Colors.gray200
                    }
                    bg={Colors.gray200}
                    height="50px"
                    color={
                      errors?.confirmPassword?.message
                        ? Colors.error100
                        : Colors.white
                    }
                    focusBorderColor={
                      errors?.confirmPassword?.message
                        ? Colors.error100
                        : Colors.gray100
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
              color={Colors.gray100}
              fontSize="14px"
            >
              <Button
                type="submit"
                bg={Colors.green100}
                color={Colors.green200}
                fontWeight="500"
                fontSize="18px"
                w="100%"
                h="49px"
                mb={5}
                _hover={{
                  bg: Colors.green300,
                }}
                _active={{ bgColor: Colors.green100 }}
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
