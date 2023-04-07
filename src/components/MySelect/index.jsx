import styles from './myselect.module.css';
import { Row, Col,Select } from "antd";
import { NavLink } from 'react-router-dom';

export default function MySelect() {
  const sort = ['商品排序', '價錢高到低', '價錢低到高']
  return (
    <div className={styles.container}>
      <Col  justify="center">
        <Row gutter={[24, 24]}  justify="end" className={styles.logobox}>
        <Select placeholder='商品排序' className={styles.Selectstyle}>
          {sort.map((sort, index) => {
            return <Select.Option key={index} value={sort} >{sort}</Select.Option>
          })}
        </Select>
        </Row>
      </Col>
    </div>
  );
}