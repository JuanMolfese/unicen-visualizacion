import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';

export function Navbar(){
  return (
    <nav>
      <FaBars className="navbar-icon" />
      <Image src="/favicon.ico" alt="logo" width={50} height={50} />
      <FaUserAlt />
    </nav>
  )
}