import {FC} from "react"
import {Container} from "@components/ui"
import Link from "next/link"
import s from "./Navbar.module.css"
import {Usernav} from "@components/common"
         
const Navbar: FC = () => {
    return (
        <Container> 
            <div className={s.root}>
                <div className="flex flex-1 items-center justify-between">
                    <Link href="/">
                        <a className={s.logo}>
                            NEXT_STORE
                        </a>
                    </Link>
                    <nav className="ml-6 space-x-6">
                        <Link href="/">
                            <a className={s.link}>ALL</a>
                        </Link>
                        <Link href="/">
                            <a className={s.link}>CLOTHES</a>
                        </Link>
                        <Link href="/">
                            <a className={s.link}>ACCESSORIES</a>
                        </Link>
                        <Link href="/">
                            <a className={s.link}>FOOTWEAR</a>
                        </Link>
                    </nav>
                    <div className="flex flex-1 justify-end space-x-8">
                        <Usernav />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Navbar;