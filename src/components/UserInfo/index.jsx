import styles from "./userinfo.module.css";
import { Icon } from "./Icons";
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";

export default function UserInfo(props) {
   const { data: userInfo} = useUserInfo();
   const navigate = useNavigate();

   const goToProfile = () => {
      if(userInfo?.name)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/auth/profile");
   };
   return (
      <div onClick={goToProfile} style={{ ...props.style }} className={styles.userInfo} >
         <Icon className={styles.icon} size={32} />
         <p className={styles.userInfoText}>
         {!!userInfo?.name
               ? `${userInfo.name}`
               : `登入`
            }
         </p>
      </div>

   );
}

