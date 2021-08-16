import { ReactNode, FC } from "react";
import s from "./Marquee.module.css"
import Ticker from "react-ticker"

interface Props {
    children: ReactNode[]
}

const Marquee: FC<Props> = ({children}) => {
    return (
        <div className={s.root}>
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