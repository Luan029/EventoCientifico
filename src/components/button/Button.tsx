import Link from "next/link";
import Styles from './Button.module.scss'
export default function Button({ text, link, type }: Readonly<{ text: string, link?: string, type: "button" | "submit" | "reset" }>) {
    
    if (link) {
        return (
            <Link href={link}>
                <button className={Styles.button}
                    type={type}
                >
                    {text}
                </button>
            </Link>
        );
    } else {
        
        return (
            <button className={Styles.button}
                type={type}
            >
                {text}
            </button>
        );
    }
}
