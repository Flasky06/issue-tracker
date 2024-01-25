import { Text } from "@radix-ui/themes";
import React, { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ErrorsMessage = ({ children }: PropsWithChildren) => {
  if (!children) return null;
  return (
    <Text color="red" as="p">
      {children}
    </Text>
  );
};

export default ErrorsMessage;
