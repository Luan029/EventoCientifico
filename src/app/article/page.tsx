"use client";
import { ChangeEvent, useState, useRef } from 'react';
import Confirm from "@/components/alerts/confirm";
import Erro from "@/components/alerts/erro";
import Sucess from "@/components/alerts/sucess";
import Button from "@/components/button/Button";
import Styles from './Styles.module.scss'
import Header from '@/components/header/Header';
import Image from 'next/image';
import Cloud from '@/imgs/cloud-upload.png'
import Clock from '@/components/clock/Clock';
import Footer from '@/components/footer/Footer';
import { FaTrash } from "react-icons/fa";

export default function RegisterArticles() {

    const [formData, setFormData] = useState<{ nome: string; text: string; file: File | null }>({
        nome: '',
        text: '',
        file: null
    });

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'text' && value.length > 500) {
            return; // não permite mais de 500 caracteres
        }
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const remainingCharacters = 500 - formData.text.length;

    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileSelectorClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                file: file
            }));
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Confirm.cadastrar().then(async (result) => {
            if (result.isConfirmed) {
                if (!formData.nome || !formData.text || !formData.file) {
                    Erro.erro('Preencha todas as informações para realizar a inscrição.')
                    return
                }
                const count = parseInt(localStorage.getItem('formArticleCount') ?? '0', 10);
                localStorage.setItem('formArticleCount', (count + 1).toString());
                console.log(formData.file)
                Sucess.cadastro();
                setFormData({
                    nome: '',
                    text: '',
                    file: null
                });
            }
        });
    }

    const hour = Clock()

    const removeArticle = () =>{
        setFormData(prevState => ({
            ...prevState,
            file: null
        }));
    }

    return (
        <>
            <Header title='Submissão de Artigo' />
            <main className={Styles.userRegistration}>
                <section className={`${Styles.formRegister} ${hour >= 6 && hour < 11 ? Styles.day : Styles.night}`}>
                    <div className={Styles.headerSection}>
                        <h2>Submeta seu Artigo</h2>
                        <p>Forneça as credenciais necessárias para realizar a submissão do artigo.</p>
                        <p>Nota: Todas as informações são obrigatórias e não é permitido cadastrar caracteres especiais nos campos.</p>
                        <p>O artigo deve estar no formato PDF.</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Título<input type="text" name="nome" value={formData.nome} onChange={handleInputChange} />
                        </label>
                        <label className={Styles.textArea}>Descrição do Artigo
                            <div style={{ position: 'relative' }}>
                                <textarea
                                    name="text"
                                    value={formData.text}
                                    onChange={handleInputChange}
                                    placeholder="Digite no máximo 500 caracteres..."
                                    rows={4}
                                    cols={50}
                                    style={{ width: '100%', height: '', resize: 'none', textIndent: '5px' }}
                                />
                                <p style={{ position: 'absolute', bottom: '5px', right: '5px', color: 'gray' }}>
                                    {remainingCharacters}
                                </p>
                            </div>
                        </label>
                        <div className={Styles.col}>
                            <section className={Styles.cloudIcon} onClick={handleFileSelectorClick}>
                                <Image
                                    src={Cloud}
                                    alt='cloud' width={80}
                                    height={80} />
                            </section>
                            <label htmlFor="file-selector"
                                className={Styles.fileSelector}
                                onClick={handleFileSelectorClick}>Buscar Artigo<input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    ref={fileInputRef}
                                    className={Styles.fileSelectorInput} />
                            </label>
                            {formData.file != null ? <p className={Styles.nameArticle}>{formData.file.name} <i ><FaTrash onClick={removeArticle}/></i> </p> : ''}

                        </div>
                        <div className={Styles.buttonsRegister}>
                            <Button text='Cancelar' link='/' type='button' />
                            <Button text='Submeter' type='submit' />
                        </div>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}
