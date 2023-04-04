import styles from './hotlist.module.css';
import { Row, Col } from "antd";
import HotListR from "../HotListR";
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from "react";

export default function HotList() {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);
   return (
      <div className="container">
         <Col  align="middle">
            <div>
               <div className={styles.item}>
                  <div  data-aos="fade-up-right" className={styles.img}>
                     <a href="">
                        <img
                           style={{ width: '100%' }}
                           src="/images/綠帶純植物烘培-1.png"
                           alt="綠帶純植物烘培" />
                        <div className={styles.overlay}>
                           <div className={styles.text}>綠帶純植物烘培</div>
                        </div>
                     </a>
                  </div>

                  <div className={styles.info}>
                     <h3 className={styles.category}>
                        綠帶純植物烘培
                     </h3>
                     <h2 className={styles.name}>
                        栗子蒙布朗旦糕
                     </h2>
                     <p className={styles.description}>
                        栗子腰果乃油加上南瓜基底的海綿旦糕， 內餡有著滿滿的有機甘栗丁，再妝點一個完整的法式糖漬栗子與可食用金箔，專屬於栗子控的享受！
                     </p>
                     <div className={styles.more}>
                        {/* <span
                           className={styles.textGray}>
                           NT${product.price}
                        </span> */}
                     </div>
                  </div>
               </div>
            </div>

            <HotListR />

            <div>
               <div  className={styles.item}>
                  <div data-aos="fade-up-right" className={styles.img}>
                     <a href="">
                        <img
                           style={{ width: '100%' }}
                           src="/images/嬉皮烘培-1.png"
                           alt="嬉皮烘培" />
                        <div className={styles.overlay}>
                           <div className={styles.text}>嬉皮烘培</div>
                        </div>
                     </a>
                  </div>

                  <div className={styles.info}>
                     <h3 className={styles.category}>
                        嬉皮烘培
                     </h3>
                     <h2 className={styles.name}>
                        鐵觀音提拉米蘇
                     </h2>
                     <p className={styles.description}>
                        選用臺灣百年茶店--鐵觀音茶葉細細磨粉，製成滿滿香氣糕體，層層抹上鐵觀音奶餡，今年夏天，送給爸爸最棒的茶味蛋糕
                     </p>
                     <div className={styles.more}>
                        {/* <span
                           className={styles.textGray}>
                           NT${product.price}
                        </span> */}
                     </div>
                  </div>
               </div>
            </div>
         </Col>
      </div>

   );
}
