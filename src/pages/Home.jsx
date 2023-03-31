import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import HomePageContent from "../components/HomePageContent";
import HotList from "../components/HotList";

function Home() {

  return (
    <div className="maincontainer mainLayout">
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <HomePageContent
        className="layoutContent"
        title="人氣精選"
      />
      {/* <ProductList products={products} className="layoutContent" /> */}
      <HotList className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Home;
