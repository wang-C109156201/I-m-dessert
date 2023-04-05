import { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import NavBar from "../NavBar";
import { UserOutlined } from '@ant-design/icons'
import CartSummary from "../CartSummary";
import { Icon } from "./Icons";
export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (

        <div className={styles.header}>
             <NavLink to="/">
                    <img className={styles.logo} src="/images/icon_logo.png" alt="logo" />
                </NavLink>
            
            {/* <div className={styles.header}>
            <div className={styles.bar}>
                <nav className={styles.nav}>
                    <ul>
                        <li><a href="#">首頁</a></li>
                        <li><a href="#">最新消息</a></li>
                        <li><a href="#">品牌介紹</a></li>
                        <li><a href="#">全部商品</a></li>
                        <li><a href="#">聯絡我們</a></li>
                    </ul>
                </nav>
            </div>
            </div> */}
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />

            <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            <CartSummary />
            <nav className={styles.icon} >
            <Icon className={styles.icon} size={32} />
            </nav>
           
            {/* <UserOutlined style={{color:"black",fontSize:"50px"}} /> */}
        </div>


    );
}

