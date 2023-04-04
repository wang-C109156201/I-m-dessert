import styles from './logo.module.css';

export default function Logo() {

  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="/images/icon_品牌logo1.png" alt="icon-1" className={styles.logo_img} />
            <img src="/images/icon_品牌logo2.png" alt="icon-2"  className={styles.logo_img} />
            <img src="/images/icon_品牌logo3.png" alt="icon-3"  className={styles.logo_img} />
        </div>
        
    </div>
  );
}