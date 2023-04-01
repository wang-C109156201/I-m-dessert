import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import styles from './navbar.module.css';


    export default function NavBar({ open, onClose }) {
        
        const NavBarContent = () => (
            <>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    首頁
                </NavLink>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    最新消息
                </NavLink>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    品牌介紹
                </NavLink>
                <NavLink to="/products/category"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    全部商品
                </NavLink>
                <NavLink to="/"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    聯絡我們
                </NavLink>  
            </>
        )
    
        return (
            <>
                <div className={styles.navBar}>
                    <NavBarContent />
                </div>
                <Drawer 
                    title="偶素甜點" 
                    placement="right" 
                    onClose={onClose} 
                    open={open} 
                    // bodyStyle={styles.Drawerbody}
                >
                    <div className={styles.drawer}>
                        <NavBarContent />

                    </div>
                </Drawer>
                <div className={styles.nav}></div>
            </>
    
        );
    }
