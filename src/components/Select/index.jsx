import styles from './select.module.css';
import { Row, Col } from "antd";
import { NavLink } from 'react-router-dom';

export default function Select() {
  const sort = ['商品排序', '價錢高到低', '價錢低到高']
  return (
    <div className={styles.container}>
      <Col align="middle" justify="center">
        <Row gutter={[24, 24]} align="middle" justify="center" className={styles.logobox}>
        <Select placeholder='商品排序' style={{ width: '25%', /*marginTop: "100px"*/ }}  >
          {sort.map((sort, index) => {
            return <Select.Option key={index} value={sort} >{sort}</Select.Option>
          })}
        </Select>
        </Row>
      </Col>
    </div>
  );
}