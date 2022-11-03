import { Spinner } from "@chakra-ui/react";

export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black_rgba flex items-center justify-center z-10">
      <Spinner
        size="xl"
        color="#61FFAA"
        speed="0.70s"
        thickness="4px"
      />
    </div>
  );
};
