import styles from '../styles/Advertising.module.css'
import Image from 'next/image'

export default function Advertising(){
    return(
        <div className={styles.divAdvertising}>            
            <Image
                src="/Advergaming.gif"
                className={styles.img}
                width={400}
                height={100}                
            />
        </div>
    )
}