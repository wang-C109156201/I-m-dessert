import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import BrandContent from "../components/BrandContent";
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

function Brand() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  return (
    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
        <title>你好我事品牌介紹頁喔</title>
        <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
        `}</style>

      </Helmet>

      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <BrandContent
        className="layoutContent"
        title="人氣精選"
      />品牌介紹拉拉拉拉拉拉
      {/* <ProductList products={products} className="layoutContent" /> */}

      <Footer className="layoutFooter" />
    </div>
  );
}

export default Brand;
