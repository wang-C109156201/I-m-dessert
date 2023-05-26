import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Button, Menu,Drawer  } from 'antd';
import UserInfoD from "../UserInfoD"

export default function NavBar({ open, onClose }) {
    const items = [
        
        {
            key: '1',
            label:(<NavLink to="/products/category">全部商品</NavLink>),
          },
        {
            key: '2',
            label:(<NavLink to="/store/store">綠帶純植物烘焙</NavLink>),
        },
        {
            key: '3',
            label:(<NavLink to="/store3/yiihotang">一禾堂</NavLink>),
        },
        {
            key: '4',
            label:(<NavLink to="/store2/hippun">嬉皮麵包</NavLink>),
        }
    ];
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
                <Dropdown
                    menu={{
                    items,
                    }}
                    trigger={['hover']}
                    placement="bottomLeft"
                >
                    <a className={styles.color}onClick={(e) => e.preventDefault()}>
                        偶素商品
                    </a>
                </Dropdown>
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
                placement="left"
                onClose={onClose}
                open={open}
                width={250}
            >
                <div className={styles.drawer}>
                    <UserInfoD/>
                    <NavBarContent />
                    {/* <NavLink to="/"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            hi你好
                    </NavLink> */}
                    
                </div>
            </Drawer>
            <div className={styles.nav}></div>
            
        </>

    );
}
