import styles from '../styles/navbar.module.css';
import Logo from './logo';
import Link from 'next/link';
import {TiArrowBackx} from 'react-icons';

export function Navbar_play(){

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        {/* <a><TiArrowBackx/></a> */}
        <a>Volver</a>
      </Link>
      <Link href="/">
        <a><Logo fill="#7C007C"/></a>
      </Link>      
    </nav>
  )
}
export default Navbar_play;