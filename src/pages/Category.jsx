import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Logo from "../components/Logo";
import MySelect from "../components/MySelect";
import { theme } from 'antd';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from '../react-query';

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Category() {
  const {
    token: { colorBgBase, colorTextBase },
  } = theme.useToken();
  // const sort = ['商品排序', '價錢高到低', '價錢低到高']

  const { data, isLoading } = useProducts();
  const products = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]; //這邊要有id才能有spinner
  
  return (

    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
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
      <ProductList products={products} isLoading={isLoading} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
