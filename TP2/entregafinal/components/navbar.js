import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import Logo from './logo';

export function Navbar(){
  return (

    <nav>
      <FaBars className={styles.navbarIcon}/>
      {/*<Image src="/favicon.ico" alt="logo" width={50} height={50} />*/}
      <Logo></Logo>
      <Image src="/logo.png" alt="logo CM Games" width={42} height={46}/>
      <FaUserAlt />
    </nav>

  )
}
export default Navbar;