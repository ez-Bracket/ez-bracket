import { Button } from '@chakra-ui/react';

interface IButtonDefaultProps {
  onClick: () => void;
  text: string;
  isLoading?: boolean | undefined;
  className?: string;
  height?: string;
}

export const ButtonDefault = ({
  onClick,
  text,
  isLoading,
  className,
  height,
}: IButtonDefaultProps) => {
  return (
    <Button
      className={className}
      fontSize="l"
      fontWeight="medium"
      minWidth="150px"
      height={height}
      bgColor="#61FFAA"
      color="#08490e"
      _hover={{ bg: '#38F892' }}
      _active={{ bg: '#38F892' }}
      onClick={onClick}
      isLoading={isLoading}
    >
      {text}
    </Button>
  );
};
