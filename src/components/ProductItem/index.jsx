import styles from './productitem.module.css';

import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import React,{useEffect} from "react";
export default function ProductItem({ product }) {
   useEffect(() => {
      Aos.init({duration: 3000});
   }, []);
   return (
       
      <div>         
         <div data-aos="slide-right" className={styles.item}>
            <div className={styles.img}>
               {/* <a href={product.link}> */}
               <Link to={`/products/id/${product.id}`}>
                  <img
                     style={{ width: '100%'}}
                     src={product.image}
                     alt={product.name} />
                  <div className={styles.overlay}>
                     <div className={styles.text}>{product.category}</div>
                  </div> 
               </Link>  
               {/* </a> */}
            </div>
            
            <div className={styles.info}>
               <h3 className={styles.category}>
                  {product.category}
               </h3>
               <h2 className={styles.name}>
                  {product.name}
               </h2>
               <p className={styles.description}>
                  {product.description}
               </p>
               <div className={styles.more}>
                  {/* <span
                     className={styles.textGray}>
                     NT${product.price}
                  </span> */}
               </div>
            </div>
         </div>
         {/* <div data-aos="slide-right"><img src="/images/news-1.png" alt="logo" /></div>
         <div data-aos="slide-right"><img src="/images/news-1.png" alt="logo" /></div> */}
      </div>
      
   );
}
