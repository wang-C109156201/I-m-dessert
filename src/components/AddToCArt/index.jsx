import { Button } from "antd"
import styles from './addtocart.module.css';
export default function AddToCart() {

  return (
    <Button className={styles.btn}>
      加入購物車
    </Button>
  );
}
