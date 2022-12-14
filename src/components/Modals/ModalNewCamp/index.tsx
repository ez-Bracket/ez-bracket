import { useContext, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
  Select,
  Textarea,
} from '@chakra-ui/react';

// Utilities
import { UserContext } from '../../../contexts/UserContext';
import { CampConext, ICampRegister } from '../../../contexts/CampContext';
import { ContextModal } from '../../../contexts/ModalContext';
import { Colors } from '../../../themes/themes';

// Components
import { CustomToast } from '../../Toast';
import { MessageError } from '../../MessageError';

export const NewCampModal = () => {
  const { isOpenNewCamp, onCloseNewCamp } = useContext(ContextModal);
  const { user } = useContext(UserContext);
  const { createCompetition } = useContext(CampConext);
  const { toastify } = CustomToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const newCampSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    number_of_players: yup.string().required('Campo obrigatório'),
    date: yup.string(),
    description: yup.string(),
    status: yup.boolean().default(true),
    idUser: yup.number().default(user[0]?.id),
    winner: yup.string().default(''),
    games: yup.array().default([]),
    players: yup.array().default([]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICampRegister>({
    resolver: yupResolver(newCampSchema),
  });

  const onSubmit = (data: ICampRegister) => {
    try {
      createCompetition(data);
      toastify({
        description: 'Torneio criado com sucesso',
        status: 'success',
      });
      onCloseNewCamp();
      reset();
    } catch (error) {
      toastify({
        description: 'Ops, algo deu errado!!',
        status: 'error',
      });
    }
  };

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenNewCamp}
        onClose={onCloseNewCamp}
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
              <h2 className="text-xl tablet:text-2xl">Crie um novo torneio</h2>
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

          <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
            <ModalBody className="mt-1 laptop:mt-4 mb-4">
              <FormControl>
                <FormLabel
                  fontSize={16}
                  className={
                    errors.name?.message ? 'text-error-100' : 'text-green-100'
                  }
                >
                  Nome do torneio
                </FormLabel>

                <Input
                  placeholder="Digite o nome do torneio"
                  _placeholder={{
                    color: Colors.gray100,
                    opacity: '50%',
                  }}
                  bg={Colors.gray200}
                  fontSize="14px"
                  height="50px"
                  color={Colors.gray100}
                  focusBorderColor={
                    errors.name?.message ? Colors.error100 : Colors.gray100
                  }
                  borderColor={
                    errors.name?.message ? Colors.error100 : Colors.gray200
                  }
                  {...register('name')}
                />
                {errors.name?.message && (
                  <MessageError error={errors.name.message}></MessageError>
                )}
              </FormControl>

              <FormControl
                className="flex-col tablet:flex-row"
                mt={4}
                w="100%"
                display="flex"
                justifyContent="space-between"
                gap="20px"
              >
                <div className="tablet:w-[50%]">
                  <FormLabel
                    fontSize={16}
                    className={
                      errors.number_of_players?.message
                        ? 'text-error-100'
                        : 'text-green-100'
                    }
                  >
                    Participantes
                  </FormLabel>
                  <Select
                    color={Colors.gray100}
                    bg={Colors.gray200}
                    h="60px"
                    w="100%"
                    focusBorderColor={
                      errors.number_of_players?.message
                        ? Colors.error100
                        : Colors.gray100
                    }
                    borderColor={
                      errors.number_of_players?.message
                        ? Colors.error100
                        : Colors.gray200
                    }
                    {...register('number_of_players')}
                  >
                    <option
                      style={{
                        backgroundColor: Colors.gray200,
                      }}
                      value="4"
                    >
                      4
                    </option>
                    <option
                      style={{
                        backgroundColor: Colors.gray200,
                      }}
                      value="8"
                    >
                      8
                    </option>
                    <option
                      style={{
                        backgroundColor: Colors.gray200,
                      }}
                      value="16"
                      disabled
                    >
                      16 (em desenvolvimento)
                    </option>
                  </Select>
                  {errors.number_of_players?.message && (
                    <MessageError
                      error={errors.number_of_players?.message}
                    ></MessageError>
                  )}
                </div>

                <div className="tablet:w-[50%]">
                  <FormLabel fontSize={16} className="text-green-100">
                    Data de início
                  </FormLabel>

                  <Input
                    type="date"
                    bg={Colors.gray200}
                    borderColor={Colors.gray200}
                    color={Colors.gray100}
                    h="60px"
                    w="100%"
                    css={{
                      '::-webkit-calendar-picker-indicator': {
                        cursor: 'pointer',
                        color: Colors.gray100,
                        background: `url(https://cdn1.iconfinder.com/data/icons/time-and-date-ii/24/Material_icons-03-70-256.png)center/100% no-repeat `,
                      },
                    }}
                    {...register('date')}
                  />
                </div>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel className="text-green-100">Descrição</FormLabel>

                <Textarea
                  placeholder="Adicione uma descrição do torneio"
                  _placeholder={{
                    color: Colors.gray100,
                    opacity: '50%',
                  }}
                  borderColor={Colors.gray200}
                  bg={Colors.gray200}
                  height="120px"
                  paddingTop={4}
                  color={Colors.gray100}
                  resize="none"
                  {...register('description')}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter mb={5} paddingBottom="">
              <Button
                bg={Colors.green100}
                color={Colors.green200}
                fontWeight="500"
                fontSize="18px"
                w="100%"
                h="49px"
                _hover={{
                  bg: Colors.green300,
                }}
                _active={{ bgColor: Colors.green100 }}
                transition="0.3s ease"
                type="submit"
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
