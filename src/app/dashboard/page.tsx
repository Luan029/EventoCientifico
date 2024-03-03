"use client";
import {Oswald} from 'next/font/google'
import styles from './Styles.module.scss';
import Button from '@/components/button/Button';
import Clock from '@/components/clock/Clock';

const oswald = Oswald({
    weight: '500',
    subsets: ['latin'] 
})
export function HomeScreen() {
    const hour = Clock()
    return (
        <main className={`${styles.eventDescription} ${hour >= 6 && hour < 11 ? styles.day : styles.night }`}>
            <section className={styles.description}>
                <h1 className={oswald.className}>Clima em Foco: Desvendando os Desafios das Mudanças Climáticas</h1>
                <h3>Bem-vindo à página oficial do evento científico <span className={styles.climate}>Clima em Foco</span>, onde discutimos as complexidades das mudanças climáticas que afetam nosso planeta. Junte-se a nós nessa jornada, inscreva-se e submeta seu artigo.</h3>
            </section>
            <section className={styles.register} >
                <Button text='Realizar Inscrição' link='/registrations' type='button'/>

                <Button text='Submeter Artigo' link='/article' type='button'/>
            </section>
        </main>
    )
}
