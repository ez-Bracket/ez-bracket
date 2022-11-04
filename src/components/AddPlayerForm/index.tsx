import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MessageError } from "../MessageError";

interface iPlayerList {
  player: string;
  playerImg?: string;
}

interface iAddPlayerFormProps {
  playersList: iPlayerList[];
  setPlayersList: ([]) => void;
}

const playersSchema = yup.object().shape({
  player: yup.string().required("Nome do jogador é obrigatório"),
});

const AddPlayerForm = ({
  playersList,
  setPlayersList,
}: iAddPlayerFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iPlayerList>({
    resolver: yupResolver(playersSchema),
  });

  const onSubmit = (data: iPlayerList) => {
    setPlayersList([...playersList, data]);
  };

  return (

    <div className="w:full tablet:w-[400px]">
      <form className="w-[100%]" onSubmit={handleSubmit(onSubmit)}>

        <FormControl position="relative">
          <FormLabel
            fontSize={16}
            className={
              errors.player?.message ? "text-error-100" : "text-green-100"
            }
          >
            Nome do participante
          </FormLabel>
          <Input
            placeholder="Digite o nome do participante"
            _placeholder={{
              color: "#c7c7c7",
              opacity: "50%",
            }}
            borderColor={errors.player?.message ? "#E64980" : "#353149"}
            bg="#353149"
            fontSize="14px"
            height="50px"
            color="#fff"
            focusBorderColor="#c7c7c7"
            {...register("player")}
          />
          {errors.player?.message && (
            <MessageError error={errors.player?.message}></MessageError>
          )}
        </FormControl>

        <FormControl mt={4}>
          <FormLabel className="text-green-100">Foto do participante</FormLabel>
          <InputGroup>
            <Input
              placeholder="URL da foto do participante"
              _placeholder={{
                color: "#c7c7c7",
                opacity: "50%",
              }}
              borderColor="#353149"
              bg="#353149"
              fontSize="14px"
              height="50px"
              color="#fff"
              focusBorderColor="#c7c7c7"
              marginBottom={6}
              {...register("playerImg")}
            />
          </InputGroup>
        </FormControl>

        <Button
          bg="#61FFAA"
          color="#08490e"
          fontWeight="500"
          fontSize="14px"
          w="max-content"
          h="49px"
          mb={5}
          _hover={{
            bg: "#38F892",
          }}
          _active={{ bgColor: "#61FFAA" }}
          transition="0.3s ease"
          type="submit"
        >
          Adicionar participante
        </Button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
