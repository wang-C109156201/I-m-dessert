import { Helmet } from "react-helmet-async"
import HeaderNew from "../components/HeaderNew"
import Footer from "../components/Footer"
import HomePageContent from "../components/HomePageContent";
import { theme } from 'antd';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  return (
    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
        <title>偶素甜點</title>
        <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
        `}</style>

      </Helmet>

      <HeaderNew
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <HomePageContent
        className="layoutContent"
        title="人氣精選"
      />
      {/* <ProductList products={products} className="layoutContent" /> */}

      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
