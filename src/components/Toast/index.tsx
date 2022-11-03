import { useToast } from "@chakra-ui/react";

interface Itoast {
  description: string;
  status: any;
}

export const CustomToast = () => {
  const toast = useToast();

  const toastify = (res: Itoast) => {
    toast({
      position: "top-right",
      duration: 2500,
      isClosable: true,
      variant: "left-accent",
      description: res.description,
      status: res.status,
    });
  };

  return { toastify };
};
