import { Row, Col } from "antd";
import ProductItem from "../ProductItem";
import styles from './productlist.module.css';

export default function ProductList({ products }) {
  return (
    <div className="container">
      <Col align="middle">
      <Row gutter={[24,24]} className={styles.imagebox}>
        {products.map(product => (
          <Col 
            key={product.id}
            sm={{ span: 12}}//2 screen ≥ 576px
            xs={{ span: 24 }}//1 screen < 576px
            md={{ span: 8 }}//3 screen ≥ 768px
            lg={{span:6}} //4 screen ≥ 992px
          >
            <ProductItem product={product} />
          </Col>
        ))}
      </Row>
    </Col>
    </div>
  );
}

