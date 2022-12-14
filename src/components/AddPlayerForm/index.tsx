import { Dispatch } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";

// Utilities
import { Colors } from "../../themes/themes";

// Components
import { MessageError } from "../MessageError";
import { CustomToast } from "../Toast";

interface IPlayerList {
  player: string;
  playerImg?: string;
}

interface IAddPlayerFormProps {
  playersList: IPlayerList[];
  setPlayersList: Dispatch<
    React.SetStateAction<IPlayerList[]>
  >;
}

const playersSchema = yup.object().shape({
  player: yup
    .string()
    .required("Nome do jogador é obrigatório"),
});

export const AddPlayerForm = ({
  playersList,
  setPlayersList,
}: IAddPlayerFormProps) => {
  const { toastify } = CustomToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPlayerList>({
    resolver: yupResolver(playersSchema),
  });

  const onSubmit = (data: IPlayerList) => {
    const some = playersList.some(
      (elem) =>
        elem.player.toLowerCase() ===
        data.player.toLowerCase()
    );

    if (!some) {
      setPlayersList([...playersList, data]);
      reset();
    } else {
      toastify({
        description: "Esse jogador já existe!",
        status: "error",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w:full tablet:w-[400px]"
    >
      <form
        className="w-[100%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl position="relative">
          <FormLabel
            fontSize={16}
            className={
              errors.player?.message
                ? "text-error-100"
                : "text-green-100"
            }
          >
            Nome do participante
            <span className="text-error-100 ml-1">*</span>
          </FormLabel>
          <Input
            placeholder="Digite o nome do participante"
            _placeholder={{
              color: Colors.gray100,
              opacity: "50%",
            }}
            borderColor={
              errors.player?.message
                ? Colors.error100
                : Colors.gray200
            }
            bg={Colors.gray200}
            fontSize="14px"
            height="50px"
            color={Colors.white}
            focusBorderColor={Colors.gray100}
            {...register("player")}
          />
          {errors.player?.message && (
            <MessageError
              error={errors.player?.message}
            ></MessageError>
          )}
        </FormControl>

        <FormControl mt={4}>
          <FormLabel className="text-green-100">
            Foto do participante
          </FormLabel>
          <InputGroup>
            <Input
              placeholder="URL da foto do participante"
              _placeholder={{
                color: Colors.gray100,
                opacity: "50%",
              }}
              borderColor={Colors.gray200}
              bg={Colors.gray200}
              fontSize="14px"
              height="50px"
              color={Colors.white}
              focusBorderColor={Colors.gray100}
              marginBottom={6}
              {...register("playerImg")}
            />
          </InputGroup>
        </FormControl>

        <Button
          bg={Colors.green100}
          color={Colors.green200}
          fontWeight="500"
          fontSize="16px"
          w="max-content"
          h="49px"
          mb={5}
          _hover={{
            bg: Colors.green300,
          }}
          _active={{ bgColor: Colors.green100 }}
          transition="0.3s ease"
          type="submit"
        >
          Adicionar participante
        </Button>
      </form>
    </motion.div>
  );
};
