import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import Logo from './logo';
import Link from 'next/link';

export function Navbar(){
  return (
    <nav className={styles.navbar}>
      
      <FaBars className={styles.navbarIcon}/>
     
      <Link href="/">
        <a><Logo fill="#7C007C"/></a>
      </Link>      

      <Link href="/profile">
        <a><FaUserAlt className={styles.navbarIcon}/>  </a>
      </Link>
    </nav>
  )
}
export default Navbar;