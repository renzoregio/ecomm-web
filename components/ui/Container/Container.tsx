import {FC, ReactNode} from "react";
import s from "./Container.module.css"

interface Props {
    children: ReactNode | ReactNode[];
    element?: any;
}
const Container:FC <Props> = ({children, element: Element="div"}) => {
    return(
        <Element className={s.root}>
            {children}
        </Element>
    )
}

export default Container