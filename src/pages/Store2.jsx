import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import HippunList from "../components/HippunList";
import hippun from "../json/hippun.json";
import StoreContent2 from '../components/StoreContent2';
import MySelect from '../components/MySelect';
import { theme } from 'antd';
// import _ from 'lodash';

function Store2() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    const { sort } = useParams();
    const _hippun = !sort
    ? hippun
    :hippun.filter(
        x => x?.sort.toUpperCase() === sort.toUpperCase()
    );
    // const title = _.startCase(categoryName);

  return (

    <div className="maincontainer mainLayout">
      <Helmet>
        <title>嬉皮麵包</title>
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
      <StoreContent2/>
      <MySelect/>         
      <HippunList hippun={_hippun} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Store2;
