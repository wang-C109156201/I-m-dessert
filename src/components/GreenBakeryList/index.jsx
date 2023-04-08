import { Row, Col } from "antd";
import GreenBakeryItem from "../GreenBakeryItem";
import styles from './greenbakerylist.module.css';

export default function GreenBakeryList({ greenbakery }) {
  return (
    <div className="container">
      <Col align="middle">
      <Row gutter={[24,24]} className={styles.imagebox}>
        {greenbakery.map(greenbakery => (
          <Col 
            key={greenbakery.id}
            sm={{ span: 12}}//2 screen ≥ 576px
            xs={{ span: 24 }}//1 screen < 576px
            md={{ span: 6 }}//4 screen ≥ 768px
          >
            <GreenBakeryItem greenbakery={greenbakery} />
          </Col>
        ))}
      </Row>
    </Col>
    </div>
  );
}

