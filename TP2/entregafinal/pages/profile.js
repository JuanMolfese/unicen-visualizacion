import styles from "../styles/Profile.module.css";
import { FaWindowClose } from "react-icons/fa";
import Link from "next/link";


export default function Profile(){
    return (
        <>
            <div className={styles.container}>
                
                <Link href="/">
                    <FaWindowClose className={styles.iconClose}/>
                </Link>                
            </div>
        </>
    )
}