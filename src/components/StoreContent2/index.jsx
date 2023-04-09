import styles from './storecontent2.module.css';
import { Row, Col } from "antd";
import { NavLink } from 'react-router-dom';
// import MySelect from '../MySelect';

export default function StoreContent2() {
    const NavBarContent = () => (
        <>
            <NavLink to="/store2/hippun"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                全部
            </NavLink>
            <NavLink to="/store2/hippun2/bread"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
               麵包
            </NavLink>
            <NavLink to="/store2/hippun2/cake"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                蛋糕
            </NavLink>
            <NavLink to="/store2/hippun2/scone"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                司康
            </NavLink>
        </>
    )
    
    return (
        <div className={styles.container} > 
            <Col align="middle" justify="center">
                <Row gutter={[24, 24]} align="middle" justify="center" className={styles.logobox}>
                    <div className={styles.content} >
                        <div className={styles.logo}>
                            <NavLink to="/store2/hippun">
                                <img src="/images/logolink-3.png" alt="icon-1" className={styles.logo_img} />
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