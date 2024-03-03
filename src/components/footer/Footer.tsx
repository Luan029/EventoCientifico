import {FaLinkedinIn, FaGoogle,FaGithubAlt} from "react-icons/fa"
import Styles from './Styles.module.scss'
import Clock from "../clock/Clock"
import Link from "next/link"

export default function Footer() {
    const hour = Clock()
    return (
        <footer className={`${Styles.footer} ${hour >= 6 && hour < 11 ? Styles.day : Styles.night}`}>
            <span>
                Desenvolvido e entregue por <strong>dev <span className={Styles.text}>L</span>uan</strong>
            </span>
            <div className={Styles.contact}>
                <Link className={Styles.linksContacts} href="https://www.linkedin.com/in/devluanpaiva/"><FaLinkedinIn className={Styles.iconColor} /></Link>
                <Link className={Styles.linksContacts} href="mailto:devluanpaiva@gmail.com"><FaGoogle className={Styles.iconColor} /></Link>
                <Link className={Styles.linksContacts} href="https://github.com/Luan029"><FaGithubAlt className={Styles.iconColor} /></Link>
            </div>
        </footer>
    )
}