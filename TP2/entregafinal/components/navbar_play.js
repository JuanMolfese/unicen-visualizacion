import styles from '../styles/navbar.module.css';
import Logo from './logo';
import Link from 'next/link';
import { FaReply } from "react-icons/fa";
import Router from 'next/router'

export function Navbar_play(){

  return (
    <nav className={styles.navbar}>
      
       <a><FaReply onClick={() => Router.back()} className={styles.navbarIcon}/></a> 
              
      <Link href="/">
        <a><Logo fill="#7C007C"/></a>
      </Link>  
      <div></div>    
    </nav>
  )
}
export default Navbar_play;