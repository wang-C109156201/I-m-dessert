import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
import products from "../json/products.json";
import Logo from '../components/logo';
import { Select } from "antd";


function Category() {
  const sort = ['商品排序','價錢高到低','價錢低到高']
  return (
    
    <div className="maincontainer mainLayout">
      <Helmet><title>全部商品</title></Helmet>
      <Header
        className="layoutHeader"
        slogan="An example made by Vite."
      />
      <div  >
        <Select placeholder='商品排序' style={{width:'25%',marginTop:"100px"}}  >
          {sort.map((sort,index)=>{
              return <Select.Option key={index}  value={sort} >{sort}</Select.Option>
          })}
        </Select>
        <Logo/>
        
      </div>
      <ProductList products={products} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Category;
