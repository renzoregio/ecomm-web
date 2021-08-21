import { FC } from "react";
import s from "./Swatch.module.css";
import { Check } from "@components/icons";
import cn from "classnames";
import { isDark } from "@lib/color";

interface Props {
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  active?: boolean;
  onClick: () => void;
}

const Swatch: FC<Props> = ({
  color,
  label,
  variant,
  selected,
  active,
  ...rest
}) => {
  const rootClass = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
  });
  console.log(color);

  label = label.toUpperCase();

  return (
    <button
      style={color && { backgroundColor: color }}
      {...rest}
      className={rootClass}
    >
      {active && variant === "color" && <Check />}
      {variant === "size" && label}
    </button>
  );
};

export default Swatch;
