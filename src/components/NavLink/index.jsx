import { NavLink } from "react-router-dom";
import { theme } from "antd";

export default function (props) {
   const {
      token: { colorNavBarBase },
    } = theme.useToken();
   return (
      <NavLink {...props} style ={{
         
         color: colorNavBarBase,
      }}>
         {props.children}
      </NavLink>
   )
}