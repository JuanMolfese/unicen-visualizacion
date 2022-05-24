import { FaInfo } from "react-icons/fa";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Check({msj, category, genres, type}) {
  return (
    <>
      <Navbar genres={genres}></Navbar>
      <div>
        {type === 'info' ? <FaInfo></FaInfo> : <p>X</p>}
        <p>{msj} <span>{category}</span></p>
      </div>
      <Footer></Footer>
    </>
  );
}