"use client";
import Link from "next/link";
import Styles from './Styles.module.scss'
import { useEffect, useState } from "react";


export default function Header(props: Readonly<{ title: string }>) {
    const [hour, setHour] = useState(new Date().getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().getHours());
        }, 60000)

        return () => clearInterval(interval)
    }, [])

    return (
        <header className={`${Styles.header} ${hour >= 6 && hour < 15 ? Styles.day : Styles.night}`}>
            <div className={Styles.logo} >
                <Link href={'/'} className={`${Styles.link}`}>Clima em Foco</Link>
            </div>
            <div className={Styles.title}>
                <h1>{props.title}</h1>
            </div>
            <div className={Styles.aux}></div>
        </header>
    )
}