import styles from "./userinfo.module.css";
import { Icon } from "./Icons";
export default function UserInfo(props) {
   const goToProfile = () => { };
   return (
      <nav onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         <Icon className={styles.icon} size={32} />
         <p className={styles.userInfoText}>
            登入
         </p>
      </nav>

   );
}
