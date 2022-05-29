import {FaShareAlt, FaWhatsapp, FaRegCopy, FaTwitter} from 'react-icons/fa';
import styles from '../styles/Game.module.css';

export default function Share_button(){
  return (
    <>
    <div className="content">
      <input type="checkbox" id="click"/>
      <label for="click" className="share-btn">
        <div className={styles.iconShare}>
          <FaShareAlt/>
        </div>
        <a href="https://api.whatsapp.com/send?text= Mira que buen juego !!"><span><FaWhatsapp/></span></a>
        <a href="#"><span><FaRegCopy/></span></a>
        <a href="#"><span><FaTwitter/></span></a>
      </label>
    </div>

    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
     .content{
        color: #202020;
      }
      .text{
        font-size: 40px;
        font-weight: 600;
      }
      p{
        font-size: 37px;
        font-weight: 500;
      }
      .share-btn{
        position: sticky;
        bottom: 30px;
        right: 30px;
        z-index: 1;
      }
      .share-btn span{
        height: 60px;
        width: 60px;
        background: #16a085;
        line-height: 60px;
        font-size: 25px;
        color: #e9fcf8;
        border-radius: 50%;
        cursor: pointer;
        border: 1px solid #159d82;
      }
      .share-btn:hover span{
        background: #159d82;
        border-color: #12876f;
      }
      .share-btn a span{
        position: absolute;
        right: 10px;
        bottom: 10px;
        height: 30px;
        width: 30px;
        line-height: 30px;
        font-size: 18px;
        border: 1px solid transparent;
        background: #16a085;
        z-index: -1;
        opacity: 0;
        pointer-events: none;
        transition: 0.6s;
      }
      #click:checked ~ .share-btn a span{
        height: 50px;
        width: 50px;
        line-height: 50px;
        font-size: 23px;
        z-index: 1;
        opacity: 1;
        pointer-events: auto;
      }
      #click:checked ~ .share-btn a:nth-child(2) span{
        bottom: 0px;
        right: 80px;
        background: #075E54;        
      }
      #click:checked ~ .share-btn a:nth-child(3) span{
        bottom: 65px;
        right: 65px;
        background: #e1306c;        
      }
      .share-btn a:nth-child(3) span{
        transition-delay: 0.2s;
      }
      #click:checked ~ .share-btn a:nth-child(4) span{
        bottom: 80px;
        right: 0px;
        background: #1DA1F2;        
      }
      .share-btn a:nth-child(4) span{
        transition-delay: 0.4s;
      }
      #click{
        display: none;
      }
    `}</style>
    </>
  )
}