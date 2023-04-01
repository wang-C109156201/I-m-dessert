import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import HotList from "../components/HotList";


function Category() {

  return (
    
    <div className="maincontainer mainLayout">
      <Helmet><title>全部商品</title></Helmet>
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <h1 style={{color:"#000" ,margin:"100px"}}>這是Category頁</h1>
      <ProductList products={products} className="layoutContent" />
      {/* <ProductDetail product={products} className="layoutContent" /> */}
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
