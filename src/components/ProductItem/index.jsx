
import styles from './productitem.module.css';

export default function ProductItem({ product }) {

   return (
      <div>         
         <div className={styles.item}>
         <div className={styles.img}>
            <a href={product.link}>
               <img
                  style={{ width: '100%'}}
                  src={product.image}
                  alt={product.name} />
               <div className={styles.overlay}>
                  <div className={styles.text}>{product.category}</div>
               </div>   
            </a>
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
               <span
                  className={styles.textGray}>
                  NT${product.price}
               </span>
            </div>
         </div>
      </div>
      </div>
      
   );
}
