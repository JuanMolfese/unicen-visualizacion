import {FaBars, FaUserAlt} from 'react-icons/fa';
import Image from 'next/image';
{/*import style from '../styles/navbar.css';*/}

export function Navbar(){
  return (

    <nav>
      <FaBars className="navbar-icon"/>
      {/*<Image src="/favicon.ico" alt="logo" width={50} height={50} />*/}
      <Image src="/logo.png" alt="logo CM Games" width={42} height={46}/>
      <FaUserAlt />
    </nav>

  )
}
export default Navbar;