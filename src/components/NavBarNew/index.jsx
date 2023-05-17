import { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import styles from './navbar.module.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
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
        },
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
    const [isTransparent, setIsTransparent] = useState(true); // 初始化為透明

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsTransparent(scrollTop >= 400); // 滾動到 500px 時設置為非透明
    };

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
                <UserInfoD className={styles.user}/>
                <div className={styles.drawer}>
                    <NavBarContent />
                    {/* <NavLink to="/"
                        className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                            偶素會員
                    </NavLink> */}
                </div>
            </Drawer>
            <div className={isTransparent ? styles.navcolor : styles.nav}></div>
        </>

    );
}
