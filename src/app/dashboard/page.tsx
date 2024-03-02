
"use client";
import { useEffect, useState } from 'react';
import styles from './Styles.module.scss';
import Button from '@/components/button/Button';

export function HomeScreen() {
    const [hour, setHour] = useState(new Date().getHours());

    useEffect(() =>{
        const interval = setInterval(() =>{
            setHour(new Date().getHours());
        }, 60000)

        return () => clearInterval(interval)
    }, [])
    return (
        <main className={styles.eventDescription}>
            <section className={`${styles.description} ${hour >= 6 && hour < 15 ? styles.day : styles.night }`}>
                <h1>Clima em Foco: Desvendando os Desafios das Mudanças Climáticas</h1>
                <h3>Bem-vindo à página oficial do evento científico <span className={styles.climate}>Clima em Foco</span>, onde discutimos as complexidades das mudanças climáticas que afetam nosso planeta. Junte-se a nós nessa jornada, inscreva-se e submeta seu artigo.</h3>
            </section>
            <section className={styles.register} >
                <Button text='Inscrever-se' color={hour >=6 && hour < 15 ? "#F2921D" : "#020659"} link='/registrations' type='button'/>
                <Button text='Submeter Artigo' color={hour >=6 && hour < 15 ? "#F2921D" : "#020659"} link='/article' type='button'/>
            </section>
        </main>
    )
}
