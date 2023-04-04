import styles from './hotlistR.module.css';
import { Row, Col } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from "react";

export default function HotListR() {
   useEffect(() => {
      Aos.init({duration: 3000});
   }, []);
   return (
      <div className="container">
         <Col  align="middle">
            <div >
               <div className={styles.item}>
                  <div className={styles.info}>
                     <h3 className={styles.category}>
                     一禾堂
                     </h3>
                     <h2 className={styles.name}>
                     香草籽豆乳餅乾
                     </h2>
                     <p className={styles.description}>
                     濃豆乳與香草籽的美好，就如同在春天遇見最好的你與我，用心製作的手工餅乾，一禾堂的人氣主打商品。
                     </p>
                     <div className={styles.more}>
                        {/* <span
                           className={styles.textGray}>
                           NT${product.price}
                        </span> */}
                     </div>
                  </div>
                  <div data-aos="fade-up-left" className={styles.img}>
                     <a href="">
                        <img
                           style={{ width: '100%', }}
                           src="/images/一禾堂-1.png"
                           alt="一禾堂" />
                        <div className={styles.overlay}>
                           <div className={styles.text}>一禾堂</div>
                        </div>
                     </a>
                  </div>
               </div>
            </div>

   
         </Col>
      </div>

   );
}
