import styles from './brandlistR.module.css';
import { Row, Col } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';

export default function BrandListR() {
   useEffect(() => {
      Aos.init({ duration: 3000 });
   }, []);
   return (
      <div className="container">
         <Col className={styles.col} >
            <div className={styles.Row}>
               <div className={styles.item}>
                  <div className={styles.info}>
                     <h2 className={styles.name}>
                        一禾堂
                     </h2>
                     <p className={styles.description}>
                        「荷」草、人、可。
                        草，植物。人，你我他。可，應許。
                        許下以植物生活的人，以植物生活許下的人。
                        「心」
                        當環境學家告訴我們：
                        世界上有45%近一半的可用陸地，全用來支持畜牧產品時，
                        我們知道，該是用一只綠色的餐盤，光復世界土地的時刻。
                        「荷」×「心」×「價值」
                        米麥豆蔬果，分享世界美善與永續的純植物健康生活。
                        是稻荷人每天在門店中，分享世界的力量！我們相信
                        餐桌餐盤風景 = 天地世界風景 = 萬物生命風景
                        而這些風景，亦是我們的生命風景。
                        我們要用一只綠色的餐盤，光復世界的土地。
                     </p>
                     <div className={styles.more}>
                        {/* <span
                           className={styles.textGray}>
                           NT${product.price}
                        </span> */}
                     </div>
                  </div>
                  <div data-aos="fade-left" className={styles.img}>
                     <Link to={`https://www.vegandaohe.com.tw/`}>
                        <img
                           className={styles.img_width}
                           src="/images/Brand_yi.png"
                           alt="一禾堂" />                        
                     </Link>
                  </div>
               </div>
            </div>


         </Col>
      </div>

   );
}
