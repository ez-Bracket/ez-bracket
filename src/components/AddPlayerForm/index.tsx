import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from '@chakra-ui/react';

const AddPlayerForm = () => {
  return (
    <div className="w:full tablet:w-[400px]">
      <form className="w-[100%]">
        <FormControl position="relative">
          <FormLabel fontSize={16} className="text-green-100">
            Nome do participante
          </FormLabel>
          <Input
            placeholder="Digite o nome do participante"
            _placeholder={{
              color: '#c7c7c7',
              opacity: '50%',
            }}
            borderColor="#353149"
            bg="#353149"
            fontSize="14px"
            height="50px"
            color="#fff"
            focusBorderColor="#c7c7c7"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel className="text-green-100">Foto do participante</FormLabel>
          <InputGroup>
            <Input
              placeholder="URL da foto do participante"
              _placeholder={{
                color: '#c7c7c7',
                opacity: '50%',
              }}
              borderColor="#353149"
              bg="#353149"
              fontSize="14px"
              height="50px"
              color="#fff"
              focusBorderColor="#c7c7c7"
              marginBottom={6}
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
            bg: '#38F892',
          }}
          _active={{ bgColor: '#61FFAA' }}
          transition="0.3s ease"
        >
          Adicionar participante
        </Button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
