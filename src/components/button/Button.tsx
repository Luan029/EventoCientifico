import Link from "next/link";
import Styles from './Button.module.scss'
export default function Button({ text, color, link, type }: Readonly<{ text: string, color: string, link?: string, type: "button" | "submit" | "reset" }>) {
    
    if (link) {
        return (
            <Link href={link}>
                <button className={Styles.button}
                    type={type}
                    style={{
                        padding: '10px',
                        background: color,
                        
                    }}
                >
                    {text}
                </button>
            </Link>
        );
    } else {
        
        return (
            <button className={Styles.button}
                type={type}
                style={{
                
                    background: color,
                
                    
                }}
            >
                {text}
            </button>
        );
    }
}
