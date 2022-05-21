import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';

export function Navbar(){
  return (
    <nav className={styles.navbar}>
      <FaBars className={styles.navbarIcon}/>
      <Image className={styles.logo} src="/logo.svg" alt="logo CM Games" width={42} height={46}/>
      <FaUserAlt className={styles.navbarIcon} />
    </nav>
  )
}
export default Navbar;