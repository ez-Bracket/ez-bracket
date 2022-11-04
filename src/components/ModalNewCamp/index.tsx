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
import { UserContext } from '../../contexts/UserContext';
import { ContextModal } from '../../contexts/ModalContext';
import { iCampRegister } from '../../contexts/CampContext';
import { CampConext } from '../../contexts/CampContext';

// Components
import { MessageError } from '../MessageError';
import { CustomToast } from '../Toast';

interface INewCampForm {
  competition: string;
  number_of_players: string;
  date?: string;
  description?: string;
}

export const NewCampModal = () => {
  const { isOpenNewCamp, onCloseNewCamp } = useContext(ContextModal);
  const { user } = useContext(UserContext);
  const { createCompetition } = useContext(CampConext);

  const { toastify } = CustomToast();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const newCampSchema = yup.object().shape({
    name: yup.string().required('Campo Obrigatório!!!'),
    number_of_players: yup.string().required('Campo Obrigatório!!!'),

    date: yup.string(),
    description: yup.string(),
    status: yup.boolean().default(true),
    userId: yup.number().default(user[0]?.id),
    winner: yup.string().default(''),
    games: yup.array().default([]),
    players: yup.array().default([]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCampRegister>({
    resolver: yupResolver(newCampSchema),
  });

  const onSubmit = (data: iCampRegister) => {
    try {
      createCompetition(data);
      const res = {
        description: 'Torneio criado com sucesso',
        status: 'success',
      };
      toastify(res);
      onCloseNewCamp();
    } catch (error) {
      const res = {
        description: 'Ops, algo deu errado!!',
        status: 'error',
      };
      toastify(res);
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
          border="2px solid #61FFAA"
          bg="#221E34"
        >
          <div className="m-auto text-xl">
            <ModalHeader className="text-green-100">
              <h2 className="text-xl tablet:text-2xl">Crie um novo torneio</h2>
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
                    color: '#c7c7c7',
                    opacity: '50%',
                  }}
                  bg="#353149"
                  fontSize="14px"
                  height="50px"
                  color="#c7c7c7"
                  focusBorderColor={
                    errors.name?.message ? '#E64980' : '#c7c7c7'
                  }
                  borderColor={errors.name?.message ? '#E64980' : '#353149'}
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
                    color="#c7c7c7"
                    bg="#353149"
                    h="60px"
                    w="100%"
                    focusBorderColor={
                      errors.number_of_players?.message ? '#E64980' : '#c7c7c7'
                    }
                    borderColor={
                      errors.number_of_players?.message ? '#E64980' : '#353149'
                    }
                    {...register('number_of_players')}
                  >
                    <option style={{ backgroundColor: '#353149' }} value="4">
                      4
                    </option>
                    <option style={{ backgroundColor: '#353149' }} value="8">
                      8
                    </option>
                    <option style={{ backgroundColor: '#353149' }} value="16">
                      16
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
                    bg="#353149"
                    borderColor="#353149"
                    color="#c7c7c7"
                    h="60px"
                    w="100%"
                    css={{
                      '::-webkit-calendar-picker-indicator': {
                        cursor: 'pointer',
                        color: '#c7c7c7',
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
                    color: '#c7c7c7',
                    opacity: '50%',
                  }}
                  borderColor="#353149"
                  bg="#353149"
                  height="120px"
                  paddingTop={4}
                  color="#c7c7c7"
                  resize="none"
                  {...register('description')}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter mb={5} paddingBottom="">
              <Button
                bg="#61FFAA"
                color="#08490e"
                fontWeight="500"
                fontSize="18px"
                w="100%"
                h="49px"
                _hover={{
                  bg: '#38F892',
                }}
                _active={{ bgColor: '#61FFAA' }}
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
