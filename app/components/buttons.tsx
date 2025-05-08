import { ComponentProps } from "react";

type Colors = "primary";
type ButtonProps = ComponentProps<"button"> & { color?: Colors };

const colors = {
  primary: "bg-sky-700 text-white hover:bg-sky-700/80",
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      {...props}
      className={`hover:cursor-pointer rounded-full px-5 py-2 text-xs sm:text-sm ${
        props.color ? colors[props.color] : colors.primary
      }`}
    >
      {props.children}
    </button>
  );
};
