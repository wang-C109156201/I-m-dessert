import { useState } from "react";
import { NavLink } from 'react-router-dom';
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import NavBar from "../NavBar";
import CartSummary from "../CartSummary";
import { Icon } from "./Icons";

export default function Header() {
    const [isOnTouch, setIsOnTouch] = useState(false);
    return (
        <div >
            <div className={styles.header}>
            {/* <div className="container"> */}
             <NavLink to="/">
                <img className={styles.logo} src="/images/icon_logo.png" alt="logo" />
            </NavLink>
            <HamburgerMenu
                onClick={() => setIsOnTouch(!isOnTouch)}
                isOnTouch={isOnTouch}
            />
            <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            <CartSummary />
            <nav className={styles.icon} >
                <Icon className={styles.icon} size={32} />
            </nav>
            {/* </div> */}
        </div>

        </div>
        

    );
}