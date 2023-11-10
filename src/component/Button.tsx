"use client";
import { ButtonProps } from "@/types/NeoPop/Button";
import { Button } from "@cred/neopop-web/lib/components";

const CustomButton = ({ children, ...otherProps }: ButtonProps) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default CustomButton;
