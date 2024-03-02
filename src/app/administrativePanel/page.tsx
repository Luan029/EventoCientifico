"use client";
import Header from "@/components/header/Header";
import Styles from './Styles.module.scss'
import { useEffect, useState } from "react";
export default function adminstrativePanel() {
    const [counterRegisters, setCounterRegisters] = useState(0);
    const [counterArticles, setCounterArticles] = useState(0);

    useEffect(() => {
        const countRegisters = parseInt(localStorage.getItem('formCount') ?? '0', 10);
        setCounterRegisters(countRegisters);
        const countArticles = parseInt(localStorage.getItem('formArticleCount') ?? '0', 10);
        setCounterArticles(countArticles);
    }, []);

    
    return (
        <>
            <Header title='Painel Administrativo' />
            <main className={Styles.adminstrativePanel}>
                <section className={Styles.panel}>
                    <div className={Styles.panels}>
                        <h2>Número de Inscrições</h2>
                        <p>{counterRegisters}</p>
                    </div>
                    <div className={Styles.panels}>
                        <h2>Número de Artigos</h2>
                        <p>{counterArticles}</p>
                    </div>
                </section>
            </main>
        </>
    )
}