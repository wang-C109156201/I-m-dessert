import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Logo from "../components/Logo";
import MySelect from "../components/MySelect";
import { theme } from 'antd';

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  // const sort = ['商品排序', '價錢高到低', '價錢低到高']
  return (

    <div className="maincontainer mainLayout">
      <Helmet>
        <title>全部商品</title>
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
      {/* <Col align="middle" > */}
      <Logo />
      <MySelect />
      {/* </Col> */}
      <ProductList products={products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
