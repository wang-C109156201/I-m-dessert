import styles from "./header.module.css";

export default function Header() {

    return (
        <div className={styles.header}>
            <img className={styles.logo} src="/images/icon_logo.png" alt="logo"/>
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
            
        </div>
    );
}

