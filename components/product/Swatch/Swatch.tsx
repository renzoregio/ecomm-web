import { FC } from "react";
import s from "./Swatch.module.css";
import { Check } from "@components/icons";
import cn from "classnames";
import { isDark } from "@lib/color";

interface Props {
  size? : "sm" | "md" | "lg"
  color?: string;
  label?: string;
  variant?: "size" | "color" | string;
  active?: boolean;
  onClick: () => void;
}

const Swatch: FC<Props> = ({
  size="md",
  color,
  label,
  variant,
  active,
  ...rest
}) => {
  const rootClass = cn(s.root, {
    [s.active]: active,
    [s.color]: color,
    [s.size]: variant === "size",
    [s.dark]: color && isDark(color),
    [s.sm] : size === "sm"
  });

  label = label.toUpperCase();

  return (
    <button
      style={color && { backgroundColor: color }}
      {...rest}
      className={rootClass}
    >
      {active && variant === "color" && <Check />}
      {variant.toLowerCase() === "size" && label}
    </button>
  );
};

export default Swatch;
