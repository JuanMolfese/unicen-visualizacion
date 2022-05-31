import styles from '../styles/navbar.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { FaTimes } from "react-icons/fa";
import Router from 'next/router';
import Modal_ComoJugar from './Modal_ComoJugar';

export function Navbar_inGame(){
    return(
    <nav className={styles.navbar}>
        <div>
            <Modal_ComoJugar></Modal_ComoJugar>
        </div>
        <div className={styles.div_mid_navbar_transparent}>
            <Link href="/">
                <a><Logo fill="#7C007C"/></a>
            </Link>
        </div>
        <div className={styles.div_end_navbar_transparent}>
            <FaTimes className={styles.navbarIcon} onClick={() => Router.back()}/>
        </div>   
   </nav>
    )
}