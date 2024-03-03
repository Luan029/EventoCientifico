"use client";
import Header from "@/components/header/Header";
import Styles from './Styles.module.scss'
import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Clock from "@/components/clock/Clock";
export default function adminstrativePanel() {
    const [counterRegisters, setCounterRegisters] = useState(0);
    const [counterArticles, setCounterArticles] = useState(0);

    useEffect(() => {
        const countRegisters = parseInt(localStorage.getItem('formCount') ?? '0', 10);
        setCounterRegisters(countRegisters);
        const countArticles = parseInt(localStorage.getItem('formArticleCount') ?? '0', 10);
        setCounterArticles(countArticles);
    }, []);
    const hour = Clock()
    
    return (
        <>
            <Header title='Painel Administrativo' />
            <main className={`${Styles.adminstrativePanel} ${hour >= 6 && hour < 11 ? Styles.day : Styles.night}`}>
                <section className={Styles.panel}>
                    <div className={Styles.panels}>
                        <h2>Inscrições Realizadas</h2>
                        <p>{counterRegisters}</p>
                    </div>
                    <div className={Styles.panels}>
                        <h2>Artigos Submetidos</h2>
                        <p>{counterArticles}</p>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}