import React from 'react';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { Row, Col, Select, Carousel } from "antd";
import { useSearchParams } from 'react-router-dom';
import AddToCart from '../AddToCArt';
import styles from "./productdetail.module.css"
import Slider from "react-slick";
const { Option } = Select;
const carouselEL = React.createRef()
function ProductDetail({ product }) {
   const [searchParams] = useSearchParams();
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
   const [qty, setQty] = useState(initQty);

   // const contentStyle = {
   //    margin: 0,
   //    height: '160px',
   //    color: '#fff',
   //    lineHeight: '160px',
   //    textAlign: 'center',
   //    background: '#364d79',
   // };
   const onChange = (currentSlide) => {
      console.log(currentSlide);
   };

   const contentStyle = {
      width: '100vw',
      height: '100vh',
      color: '#fff',
      lineHeight: '80vh',
      textAlign: 'center',
      background: '#364d79',
      marginLeft: "50%",
      transform: 'translateX(-50%)',
      cursor: 'pointer',
   };

   useEffect(() => {
      setQty(initQty)
   }, [initQty])

   return (

      <div className="container">

         <Col style={{ width: "100%", margin: "auto", marginTop: "12rem" }} justify="center" >
            <Row gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", paddingBottom: "2.5rem" }} justify="space-between" align="middle"
            >
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 13 }}
                  justify="space-between" align="middle"
               >
                  {/* <img
                     alt={product.name}
                     className={styles.image}
                     src={product.image}
                  /> */}

                  <Button
                     className={styles.btnstyle}
                     style={{ left: 50 }}
                     onClick={() => {
                        carouselEL.current.prev();
                     }}

                     icon={<LeftOutlined />}
                  ></Button>
                  <Button
                     className={styles.btnstyle}
                     style={{ right: 50 }}
                     onClick={() => {
                        carouselEL.current.next();
                     }}

                     icon={<RightOutlined />}
                  ></Button>
                  <Carousel ref={carouselEL} afterChange={onChange}>
                     <div>
                        <img
                           alt={product.name}
                           className={styles.image}
                           src={product.img1}
                        />
                     </div>
                     <div>
                        <img
                           alt={product.name}
                           className={styles.image}
                           src={product.img2}
                        />
                     </div>
                  </Carousel>

               </Col>
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 11 }}
               >
                  <div className={styles.info} >
                     <img
                        alt="分享"
                        className={styles.share}
                        src="/images/icon_Linking.png"
                     />
                     <h2 className={styles.category} >
                        {product.category}
                     </h2>
                     <h1 className={styles.name} >
                        {product.name}
                     </h1>
                     <p className={styles.description}>
                        {product.description_long}
                     </p>
                     <div className={styles.wrap}>
                        <div className="textbox">
                           <p className={styles.text}>素別</p>
                           <p className={styles.price} >
                              {product.Vegan}
                           </p>
                           <p className={styles.text}>價格</p>
                           <p className={styles.price} >
                              NT$&nbsp;{product.price}
                           </p>
                        </div>
                        {/* <p className={styles.status}>
                     Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                  </p> */}
                        <div className={styles.select}>
                           <p className={styles.text}>數量 {"   "}</p>
                           <Select
                              defaultValue={qty}
                              key={qty}
                              className={styles.selectStyle}
                              onChange={val => setQty(val)}
                           >
                              {[...Array(product.countInStock).keys()].map((x) => (
                                 <Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                 </Option>
                              ))}
                           </Select>
                        </div>
                        <p className={styles.qty}>
                           目前金額： {product.price * qty}$&nbsp;/&nbsp;{product.price * qty > 1000 ? "達到免運門檻囉" : "未達到免運，還差"+(1000-product.price * qty)+"$" }
                        </p>
                        <Row justify="space-between" align="middle">
                           <Button className={styles.btn}>
                              立即購買
                           </Button>
                           <AddToCart product={product} qty={qty} />
                        </Row>
                     </div>
                  </div>
               </Col>
            </Row>
            <h1 className={styles.title} >
               商&nbsp;品&nbsp;介&nbsp;紹
            </h1>
            <Row gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", }} justify="space-between" align="middle"
            >
               <div className={styles.box}>
                  <Col
                     xs={{ span: 24 }}
                     lg={{ span: 13 }}
                  // justify="space-between" align="middle"
                  >
                     <div className={styles.info} >

                        <h1 className={styles.description_name} >
                           {product.name}
                        </h1>
                        <p className={styles.description}>
                           {product.description}
                        </p>

                     </div>
                  </Col>
                  <Col
                     xs={{ span: 24 }}
                     lg={{ span: 11 }}
                     justify="center" align="middle"
                  >
                     <img
                        alt={product.name}
                        className={styles.image2}
                        src={product.img2}
                     />
                  </Col>

               </div>
            </Row>

            <Row
               gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", }} justify="space-between" align="middle"
            >
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 14 }}
               >
                  <div className={styles.info} >

                     <h1 className={styles.description_name} >
                        主要成分
                     </h1>
                     <p className={styles.description}>
                        {product.Ingredients}
                     </p>

                  </div>
               </Col>
            </Row>
            <Row
               gutter={[32, 32]}
               style={{ width: "100%", margin: "auto", }} justify="space-between" align="middle"
            >
               <Col
                  xs={{ span: 24 }}
                  lg={{ span: 24 }}
               >
                  <div className={styles.info} >

                     <h1 className={styles.description_name} >
                        訂購須知
                     </h1>
                     <p className={styles.notice}>
                        ⦿ 商品採新鮮製作、當日寄出，還請訂購後耐心等候，常態出貨時間為：完成付款日起算，3-5個工作天後出貨。<br />
                        ※貼心提醒：到店取貨不適用當天下訂，當天取貨，如有需求請致電門市詢問或至 inline訂購 ，敬請配合，謝謝。<br />
                        ⦿ 請注意：例假日及周日不出貨，訂單將於上班日後依照訂單先後順序處理。<br />
                        ⦿ 提醒您：黑貓宅急便週日無收送件之服務，敬請見諒。<br />
                        ⦿ 若在天氣狀況不佳及交通道路中斷等配送困難的情況下，送達時間有可能變動。<br />
                        ⦿ 如因節慶關係訂單增加，則出貨時間將依據最新消息之公告說明為準。
                     </p>
                     <img
                        alt="分享"
                        className={styles.imd}
                        src="/images/浮水印.png"
                     />

                  </div>
               </Col>
            </Row>

         </Col>

      </div>

   );
}

export default ProductDetail;