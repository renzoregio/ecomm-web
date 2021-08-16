import { ReactNode, FC } from "react";
import s from "./Marquee.module.css"
import Ticker from "react-ticker"
import cn from "classnames"

interface Props {
    children: ReactNode[];
    variant?: "primary" | "secondary"
}

const Marquee: FC<Props> = ({children, variant = "primary"}) => {
    const rootClasses = cn(
        s.root, {
            ["bg-black"]: variant === "primary",
            ["bg-white"]: variant === "secondary"
        }
    )
    return (
        <div className={rootClasses}>
            <Ticker>
                {() => 
                    <div className={s.container}>
                        {children}
                    </div>
                }
            </Ticker>
            
        </div>
    )
}

export default Marquee;