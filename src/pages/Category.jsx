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
      {/* <h1 style={{color:"#000" ,margin:"100px"}}>這是Category頁</h1> */}
      <div style={{display:"flex",alignContent:"center",justifyContent:"center"}} >
        <img src="/images/icon_品牌logo1.png" alt="icon-1" style={{border:"2px #4D6447 solid",marginTop:"150px",borderRadius:"50%"}} />
        <img src="/images/icon_品牌logo2.png" alt="icon-2"  style={{border:"2px #4D6447 solid",marginTop:"150px",borderRadius:"50%"}} />
        <img src="/images/icon_品牌logo3.png" alt="icon-3"  style={{border:"2px #4D6447 solid",marginTop:"150px",borderRadius:"50%"}} />
      </div>
      <ProductList products={products} className="layoutContent" />
      {/* <ProductDetail product={products} className="layoutContent" /> */}
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
