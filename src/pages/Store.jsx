import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import GreenBakeryList from "../components/GreenBakeryList";
import greenbakery from "../json/greenbakery.json";
import StoreContent from '../components/StoreContent';
import MySelect from '../components/MySelect';
import { theme } from 'antd';
import _ from 'lodash';
import { useLocation } from "react-router-dom";
import { useProductsByCategory } from '../react-query';
import { updateProductInFirestore} from '../api'; // Assuming updateProducts is an API function
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Store() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();
    const { sort } = useParams();
    const normalizedSort = typeof sort === 'string' ? sort.toUpperCase() : '';
    const _greenbakery = !normalizedSort
      ? greenbakery
      : greenbakery.filter(x => typeof x.sort === 'string' && x.sort.toUpperCase() === normalizedSort);
    // const title = _.startCase(categoryName);
    // const { categoryName } = useParams();
    const { data, isLoading } = useProductsByCategory(sort);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const updateData = async () => {
        const updatedProducts = await updateProductInFirestore(sort);
        setProducts(updatedProducts);
      };
      updateData();
    }, [sort]);
    
  return (

    <div className="maincontainer mainLayout">
      <ScrollToTopOnMount/>
      <Helmet>
        <title>綠帶純植物烘培</title>
        <style>{`
            body { 
                background-color: ${colorBgBase}; 
                color: ${colorTextBase}
            }
        `}</style>
      </Helmet>
      <Header
        className="layoutHeader"
      />
      <StoreContent/>
      <MySelect/>         
      <GreenBakeryList products={products} isLoading={isLoading} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Store;
