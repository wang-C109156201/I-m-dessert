import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import HotList from "../components/HotList";

function Product() {

  return (
    <div className="maincontainer mainLayout">
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <h1 style={{color:"#000" ,margin:"100px"}}>這是全部產品頁</h1>
      {/* <ProductList products={products} className="layoutContent" /> */}
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Product;
