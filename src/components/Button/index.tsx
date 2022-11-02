import { Button } from '@chakra-ui/react';

interface IButtonDefaultProps {
  onClick: () => void;
  text: string;
  isLoading?: boolean | undefined;
}

export const ButtonDefault = ({
  onClick,
  text,
  isLoading,
}: IButtonDefaultProps) => {
  return (
    <Button
      fontSize="l"
      fontWeight="medium"
      bgColor="#61FFAA"
      _hover={{ bg: '#38F892' }}
      onClick={onClick}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
};
