"use client";
import Link from "next/link";
import Styles from './Styles.module.scss'
import { LuPanelLeftOpen } from "react-icons/lu";
import Clock from "../clock/Clock";


export default function Header(props: Readonly<{ title: string }>) {
    const hour = Clock()

    return (
        <header className={`${Styles.header} ${hour >= 6 && hour < 11 ? Styles.day : Styles.night}`}>
            <div className={Styles.logo} >
                <Link href={'/'} className={`${Styles.link}`}>Clima em Foco</Link>
            </div>
            <div className={Styles.title}>
                <h1>{props.title}</h1>
                <nav className={Styles.aux}><Link className={Styles.linkPanel} href={'/administrativePanel'}>Painel <i><LuPanelLeftOpen /></i></Link></nav>
            </div>
        </header>
    )
}