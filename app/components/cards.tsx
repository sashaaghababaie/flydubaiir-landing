import { ComponentProps } from "react";

export const Card = (props: ComponentProps<"div">) => {
  return (
    <div {...props} className="rounded-3xl overflow-hidden">
      {props.children}
    </div>
  );
};
