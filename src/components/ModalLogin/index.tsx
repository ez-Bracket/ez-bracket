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
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MessageError } from '../MessageError';

interface ILoginForm {
  email: string;
  password: string;
}

interface IModalLogin {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const ModalLogin = ({
  isOpen,
  onClose,
  onOpenRegister,
}: IModalLogin) => {
  const [showPass, setShowPass] = useState(false);
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um E-mail válido!!!')
      .required('E-mail obrigatório'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(8, 'Deve conter no mínimo 8 caracteres')
      .matches(/[A-Z]/, 'Deve conter ao menos uma letra maiúscula')
      .matches(/[a-z]/, 'Deve conter ao menos uma letra minúscula')
      .matches(/[0-9]/, 'Deve conter ao menos um número')
      .matches(/(\W)|_/, 'Deve conter ao menos um caracter especial'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const handleShowPass = () => setShowPass(!showPass);

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
  };

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

          <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
            <ModalBody className=" mt-1 laptop:mt-4 mb-4">
              <FormControl position="relative">
                <FormLabel
                  fontSize={16}
                  className={errors.email ? 'text-error-100' : 'text-green-100'}
                >
                  Email
                </FormLabel>
                <Input
                  placeholder="Digite o e-mail do usuário"
                  _placeholder={{ color: '#c7c7c7', opacity: '50%' }}
                  borderColor={errors.email?.message ? '#E64980' : '#353149'}
                  bg="#353149"
                  fontSize="14px"
                  height="50px"
                  color={errors.email?.message ? '#E64980' : '#fff'}
                  focusBorderColor={
                    errors.email?.message ? '#E64980' : '#c7c7c7'
                  }
                  {...register('email')}
                />
                {errors.email?.message && (
                  <MessageError error={errors.email?.message}></MessageError>
                )}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel
                  className={
                    errors.password ? 'text-error-100' : 'text-green-100'
                  }
                >
                  Senha
                </FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Digite sua senha"
                    _placeholder={{ color: '#c7c7c7', opacity: '50%' }}
                    borderColor={
                      errors.password?.message ? '#E64980' : '#353149'
                    }
                    bg="#353149"
                    fontSize="14px"
                    height="50px"
                    color={errors.email?.message ? '#E64980' : '#fff'}
                    focusBorderColor={
                      errors.email?.message ? '#E64980' : '#c7c7c7'
                    }
                    type={showPass ? 'text' : 'password'}
                    {...register('password')}
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
                {errors.password?.message && (
                  <MessageError error={errors.password?.message}></MessageError>
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
              <p>
                Não possui conta?{' '}
                <Button
                  onClick={() => {
                    onClose();
                    onOpenRegister();
                  }}
                  className="underline hover:brightness-90 transition-colors"
                  variant="link"
                  fontSize="14px"
                  fontWeight="medium"
                  color="#c7c7c7"
                >
                  Clique aqui
                </Button>
              </p>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};