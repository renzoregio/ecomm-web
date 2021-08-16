import {FC, ReactNode, ComponentType, HTMLAttributes} from "react";
import s from "./Container.module.css"

interface Props {
    children: ReactNode | ReactNode[];
    element?: ComponentType<HTMLAttributes<HTMLElement>>
}
const Container:FC <Props> = ({children, element: Element="div"}) => {
    return(
        <Element className={s.root}>
            {children}
        </Element>
    )
}

export default Container