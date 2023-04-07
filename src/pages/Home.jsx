import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import HomePageContent from "../components/HomePageContent";
import { theme } from 'antd';


function Home() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();

  return (
    <div className="maincontainer mainLayout">
      <Helmet>
        <title>偶素甜點</title>
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
