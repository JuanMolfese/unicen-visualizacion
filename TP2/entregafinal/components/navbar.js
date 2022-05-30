import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/navbar.module.css';
import Logo from './Logo';
import Link from 'next/link';
import ModalMenu from './ModalMenu';
import { useSession } from 'next-auth/react';

export function Navbar(genres){

  const { data: session } = useSession();

  return (
    <>
      <nav className={styles.navbar}>
        <ModalMenu genres={genres}></ModalMenu>
        <Link href="/">
          <a><Logo /></a>
        </Link>     
        {(session) ?
        <Link href="/profile">
          <img src={session.user.image} width={37} height={37} className={styles.imgProfile}></img>
        </Link>
        :<Link href="/register">
          <a><FaUserAlt className={styles.navbarIcon}/>  </a>
        </Link> 
        }
      </nav>
      
    </>
  )
}
export default Navbar;