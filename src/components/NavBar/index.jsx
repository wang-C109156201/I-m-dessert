import { useState,useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { Dropdown, Space,Button, Menu,Drawer,Divider,  } from 'antd';
import styles from './navbar.module.css';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import UserInfoD from "../UserInfoD"

function getItem(label, key,  children) {
    return {
      key,
      children,
      label,
    };
  }
  
export default function NavBar({ open, onClose }) {
    const items = [
        getItem(<NavLink to="/">首頁</NavLink>, '1'),
        getItem('最新消息', '2'),
        getItem(<NavLink to="/Brand">品牌介紹</NavLink>, '3'),
        getItem('偶素商品', 'sub1', [
            getItem(<NavLink to="/products/category">全部商品</NavLink>,'4'),
            getItem(<NavLink to="/store/store">綠帶純植物烘焙</NavLink>,'5'),
            getItem(<NavLink to="/store3/yiihotang">一禾堂</NavLink>,'6'),
            getItem(<NavLink to="/store2/hippun">嬉皮麵包</NavLink>,'7'),
        ]),
        getItem('聯絡我們', '8'),
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
            <NavLink to="/Brand"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                品牌介紹
            </NavLink>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                <Dropdown
                    menu={{
                        items:dropdownItems,
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
    // const [isTransparent, setIsTransparent] = useState(true); // 初始化為透明

    // useEffect(() => {
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  
    // const handleScroll = () => {
    //   const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //   setIsTransparent(scrollTop >= 400); // 滾動到 500px 時設置為非透明
    // };

    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');
    const dropdownItems = items.find(item => item.key === 'sub1').children; // 提取 sub1 的內容
    const [selectedKeys, setSelectedKeys] = useState(); 
    const handleMenuClick = (e) => {
        setSelectedKeys([e.key]); // 更新选中的菜单项
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
                    {/* <NavBarContent /> */}
                    <Menu
                        style={{
                            width:210,
                            }}
                        // defaultSelectedKeys={['1']}
                        // selectedKeys={selectedKeys} // 使用选中的菜单项
                        // onClick={handleMenuClick} // 设置菜单项点击事件
                        mode={mode}
                        theme={theme}
                        items={items} // Replace `children` with `items`
                    />
                </div>
            </Drawer>
            <div className={styles.nav}></div>
        </>

    );
}
