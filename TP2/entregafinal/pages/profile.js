import styles from "../styles/Profile.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import {FiLogOut} from 'react-icons/fi'


export default function Profile(genres){

    return (
        <>
            <Navbar genres={genres}></Navbar>
            <div className={styles.container}>
                <div className={styles.logout}>
                    <Link href="/">
                        <FiLogOut className={styles.iconClose}/>
                    </Link>                
                </div>
                <div className={styles.profile}>
                    <div className={styles.profile_image}>
                        <img width={50} height={50} src="https://avatars3.githubusercontent.com/u/56955891?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4" alt="profile"/>
                        <p>juanmolfese@gmail.com</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export const getServerSideProps = async () => {
    const resGenres = await fetch('https://unicen-visualizacion-juanmolfese.vercel.app/api/categories');
    const genres = await resGenres.json();
    return {
      props: {
        // props that you want to pass to the page
        genres: genres,
      },
    };
  }
  