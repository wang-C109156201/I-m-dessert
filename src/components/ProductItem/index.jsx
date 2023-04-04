import React,{useEffect} from "react";
import styles from './productitem.module.css';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";

export default function ProductItem({ product }) {
   useEffect(() => {
      Aos.init({duration: 4000});
      Aos.refresh();
   }, []);
   return (
       
      <div>         
         <div className={styles.item}>
            <div className={styles.img}>
               <a href={product.link}>
               <Link to={`/products/id/${product.id}`}>
                  <img
                     style={{ width: '100%'}}
                     src={product.image}
                     alt={product.name} />
                  <div className={styles.overlay}>
                     <div className={styles.text}>{product.category}</div>
                  </div> 
               </Link>  
               </a>
            </div>
            <h2 className={styles.name}>
               {product.name}
            </h2>
            <div
               className={styles.textGray}>
               NT${product.price}
            </div>
           
         </div>
      </div>
      
   );
}
