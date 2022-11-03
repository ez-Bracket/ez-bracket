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
import { UserContext } from "../../contexts/UserContext";
import { ContextModal } from "../../contexts/ModalContext";

// Components
import { MessageError } from "../MessageError";

interface IModalRegister {
  title: string;
  buttonDesc: string;
  isRegister?: boolean;
}

interface IdataRegister {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  imgUrl?: string;
}

export const ModalRegister = ({
  title,
  buttonDesc,
  isRegister,
}: IModalRegister) => {
  const { isOpenRegister, onCloseRegister, onOpenLogin } =
    useContext(ContextModal);

  const [showPass, setShowPass] = useState(false);

  const [showConfirmPass, setShowConfirmPass] =
    useState(false);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleShowPass = () => setShowPass(!showPass);

  const handleShowConfirmPass = () =>
    setShowConfirmPass(!showConfirmPass);

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome de usuário obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
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
      .required("Confirmação de senha obrigatória")
      .oneOf(
        [yup.ref("password")],
        "As senhas não conferem"
      ),
    imgUrl: yup.string().url("URL inválida"),
  });

  const { Register } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdataRegister>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: IdataRegister) => {
    Register(data);
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenRegister}
        onClose={onCloseRegister}
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
                {title}
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
                  className={
                    errors.name?.message
                      ? "text-error-100"
                      : "text-green-100"
                  }
                >
                  Nome de usuário
                  <span className="text-error-100 ml-1">
                    *
                  </span>
                </FormLabel>
                <Input
                  id="name"
                  placeholder="Digite o nome de usuário"
                  {...register("name")}
                  _placeholder={{
                    color: "#c7c7c7",
                    opacity: "50%",
                  }}
                  fontSize="14px"
                  borderColor={
                    errors.name?.message
                      ? "#E64980"
                      : "#353149"
                  }
                  bg="#353149"
                  height="50px"
                  color={
                    errors.name?.message
                      ? "#E64980"
                      : "#fff"
                  }
                  focusBorderColor={
                    errors.name?.message
                      ? "#E64980"
                      : "#c7c7c7"
                  }
                />
                {errors.name?.message && (
                  <MessageError
                    error={errors.name?.message}
                  ></MessageError>
                )}
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
                  <span className="text-error-100 ml-1">
                    *
                  </span>
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
                    errors.password?.message
                      ? "text-error-100"
                      : "text-green-100"
                  }
                >
                  Senha
                  <span className="text-error-100 ml-1">
                    *
                  </span>
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
                      errors.password?.message
                        ? "#E64980"
                        : "#353149"
                    }
                    bg="#353149"
                    height="50px"
                    color={
                      errors.password?.message
                        ? "#E64980"
                        : "#fff"
                    }
                    focusBorderColor={
                      errors.password?.message
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
                  <span className="text-error-100 ml-1">
                    *
                  </span>
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
                      errors.confirmPassword?.message
                        ? "#E64980"
                        : "#353149"
                    }
                    bg="#353149"
                    height="50px"
                    color={
                      errors.confirmPassword?.message
                        ? "#E64980"
                        : "#fff"
                    }
                    focusBorderColor={
                      errors.confirmPassword?.message
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
                {buttonDesc}
              </Button>

              {isRegister && (
                <p>
                  Já possui conta?{" "}
                  <Button
                    onClick={() => {
                      onCloseRegister();
                      onOpenLogin();
                    }}
                    className="underline hover:brightness-90 transition-colors"
                    variant="link"
                    fontSize="14px"
                    fontWeight="medium"
                    color="#c7c7c7"
                  >
                    Faça o login
                  </Button>
                </p>
              )}
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
