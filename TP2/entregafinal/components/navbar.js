import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import Logo from './logo';
import Link from 'next/link';
import ModalMenu from './ModalMenu';

export function Navbar(){

  return (
    <>
      <nav className={styles.navbar}>
        <ModalMenu></ModalMenu>
        <Link href="/">
          <a><Logo fill="#7C007C"/></a>
        </Link>      
        <Link href="/register">
          <a><FaUserAlt className={styles.navbarIcon}/>  </a>
        </Link> 
      </nav>
      
    </>
  )
}
export default Navbar;