import { Row, Col } from "antd";
import ProductItem from "../ProductItem";
import styles from './productlist.module.css';

export default function ProductList({ products }) {
  return (
    <div className="container">
      <Col align="middle">
    <Row gutter={[32,32]} className={styles.imagebox}>
      {products.map(product => (
        <Col 
          key={product.id}
          // sm={{ span: 24}}
          // lg={{ span: 8 }}
          // xs={{ span: 32 }}
          // md={{ span: 16 }}
        >
          <ProductItem product={product} />
        </Col>
      ))}
    </Row>
    </Col>
    </div>
  );
}

