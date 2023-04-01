import { useParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import HotList from "../components/HotList";

function Product() {
  const { productId } = useParams();
  const product = products.find(
     (x) => x.id === productId
  );

  return (
    <div className="maincontainer mainLayout">
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <h1 style={{color:"#000" ,margin:"100px"}}>這是購物車頁</h1>
      {/* <ProductList products={products} className="layoutContent" /> */}
      <ProductDetail product={product} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Product;
