import styles from './storecontent.module.css';
import { Row, Col } from "antd";
import { NavLink } from 'react-router-dom';
// import MySelect from '../MySelect';

export default function StoreContent() {
    const NavBarContent = () => (
        <>
            <NavLink to="/store/green/green"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                全部
            </NavLink>
            <NavLink to="/store/green/cc"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                餅乾
            </NavLink>
            <NavLink to="/store/green/c"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                蛋糕
            </NavLink>
            <NavLink to="/store/green/b"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                麵包
            </NavLink>
        </>
    )
    
    return (
        <div className={styles.container} > 
            <Col align="middle" justify="center">
                <Row gutter={[24, 24]} align="middle" justify="center" className={styles.logobox}>
                    <div className={styles.content} >
                        <div className={styles.logo}>
                            <NavLink to="/store/green">
                                <img src="/images/logolink-1.png" alt="icon-1" className={styles.logo_img} />
                            </NavLink>
                        </div>
                        <div className={styles.NavBar}>
                            <NavBarContent />
                        </div>
                        
                        {/* <div className={styles.SelectBox}>
                            <p >全部商品/綠帶純植物烘培</p>
                            <MySelect className={styles.MySelect} />
                        </div> */}
                        
                    </div>
                </Row>
            </Col>
        </div>
    );
}