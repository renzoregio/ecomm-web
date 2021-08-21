import { FC } from "react";
import s from "./Swatch.module.css"
import { Check } from "@components/icons"

interface Props {
    color?: string;
    label?: string;
    variant?: "size" | "color" | string
}

const Swatch: FC<Props> = ({color, label, variant}) => {

    label = label.toUpperCase()

    return (
        <button style={color && {backgroundColor: color}} className={s.root}>
            {/* <span><Check /></span> */}
            { variant.toLowerCase() === "size" && label }
        </button>
    )
}

export default Swatch;