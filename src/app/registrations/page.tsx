"use client";
import { useEffect, useState } from 'react';
import Confirm from "@/components/alerts/confirm";
import Erro from "@/components/alerts/erro";
import Sucess from "@/components/alerts/sucess";
import Button from "@/components/button/Button";
import Styles from './Styles.module.scss'

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

                if (formData.nome && formData.email && formData.afiliacoes) {
                    Sucess.cadastro()
                    console.log(formData)
                    setFormData({
                        nome: '',
                        email: '',
                        afiliacoes: ''
                    });
                    return
                }
                Erro.erro('Preencha as Informações para realizar inscrição.')
            }
        })
    }
    const [hour, setHour] = useState(new Date().getHours());

    useEffect(() => {
        const interval = setInterval(() => {
            setHour(new Date().getHours());
        }, 60000)

        return () => clearInterval(interval)
    }, [])
    return (
        <section className={Styles.userRegistration}>
            <section className={`${Styles.formRegister} ${hour >= 6 && hour < 18 ? Styles.day : Styles.night }`}>
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
                        <Button text='Enviar Inscrição' color={hour >= 6 && hour < 18 ? "#F2921D" : "#020659"} type='submit' />
                        <Button text='Página do Participante' color={hour >=6 && hour < 9 ? "#F2921D" : "#020659"} link='/registrations' type='button'/>
                    </div>
                </form>
            </section>
        </section>
    )
}