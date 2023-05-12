import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoginCard from '../components/LoginCard';

function Login() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();

   return (
      <div className="maincontainer mainLayout">
         <Helmet>
            <title>會員登入</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
        className="layoutHeader"
      />
      {/* <LoginCard /> */}
         <div className="layoutContent">
            <LoginCard />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Login;
