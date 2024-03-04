"use client";
import {  useState } from 'react';
import Confirm from "@/components/alerts/confirm";
import Erro from "@/components/alerts/erro";
import Sucess from "@/components/alerts/sucess";
import Button from "@/components/button/Button";
import Styles from './Styles.module.scss'
import Header from '@/components/header/Header';
import Clock from '@/components/clock/Clock';
import Footer from '@/components/footer/Footer';

export default function Registrations() {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        afiliacoes: '',
    })

    const handleChange = (event: { target: { name: any; value: any; }; }) => {

        const { name, value } = event.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))

    }
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        Confirm.cadastrar().then(async (result) => {
            if (result.isConfirmed) {

                if (!formData.nome || !formData.email || !formData.afiliacoes) {
                    Erro.erro('Preencha as Informações para realizar inscrição.')
                    return
                }

                localStorage.setItem('formData', JSON.stringify(formData));

                const formDataSalvo = localStorage.getItem('formData');
                if (!formDataSalvo) {
                    Erro.erro('Erro ao salvar os dados, preencha novamente.')
                    return
                }

                const count = parseInt(localStorage.getItem('formCount') ?? '0', 10);
                localStorage.setItem('formCount', (count + 1).toString());
                Sucess.cadastro()
                setFormData({
                    nome: '',
                    email: '',
                    afiliacoes: ''
                });

            }
        })
    }
    const hour = Clock()
    return (
        <>
            <Header title='Página de Inscrição'/>
            <main className={Styles.userRegistration}>
                <section className={`${Styles.formRegister} ${hour >= 6 && hour < 18 ? Styles.day : Styles.night}`}>
                    <div className={Styles.headerSection}>
                        <h2>Preencha as Informações</h2>
                        <p>Forneça as credenciais necessárias para realizar sua inscrição.</p>
                        <p>Nota: Todas as informações são obrigatórias e não é permitido cadastrar caracteres especiais nos campos.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label >
                            Nome<input type="text" name="nome" value={formData.nome} onChange={handleChange} />
                        </label>
                        <label >
                            Email<input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </label>
                        <label >
                            Afiliação<input type="text" name="afiliacoes" value={formData.afiliacoes} onChange={handleChange} />
                        </label>
                        <div className={Styles.buttonsRegister}>
                            <Button text='Cancelar'  link='/' type='button' />
                            <Button text='Inscrever'  type='submit' />
                        </div>
                    </form>
                </section>
            </main>
            <Footer/>
        </>
    )
}