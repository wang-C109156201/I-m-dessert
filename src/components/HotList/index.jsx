import styles from './hotlist.module.css';
import { Row, Col } from "antd";
import HotListR from "../HotListR";
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from "react";
import { Link } from 'react-router-dom';

export default function HotList(product) {
   useEffect(() => {
      Aos.init({duration: 2000});
   }, []);
   return (
      <div className="container">
         <Col  className={styles.col}>
            <div className={styles.Row}>
               <div className={styles.item}>
                  <div data-aos="fade-right" className={styles.img}>
                  <Link to={`/products/id/g1`}>
                        <img
                           className={styles.img_width}
                           src="/images/綠帶純植物烘培-1.png"
                           alt="綠帶純植物烘培" />
                           
                        <div className={styles.overlay}>
                           <div className={styles.text}>綠帶純植物烘培</div>
                        </div>
                  </Link>
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
                     </div>
                  </div>
               </div>
            </div>

            <HotListR />

            <div className={styles.Row}>
               <div  className={styles.item}>
                  <div data-aos="fade-right" className={styles.img}>
                     <Link to={`/products/id/h4`}>
                        <img
                           className={styles.img_width}
                           src="/images/嬉皮烘培-1.png"
                           alt="嬉皮烘培" />
                        <div className={styles.overlay}>
                           <div className={styles.text}>嬉皮烘培</div>
                        </div>
                     </Link>
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
                     </div>
                  </div>
               </div>
            </div>
         </Col>
      </div>

   );
}
