import Fondo_animado from "../components/fondo_animado";
import Link from "next/link";
import { FaWindowClose } from "react-icons/fa";

export default function register(){
  return (
    <>
      <Fondo_animado/>
      <Link href="/">
        <FaWindowClose />
      </Link>
    </>
  )
}