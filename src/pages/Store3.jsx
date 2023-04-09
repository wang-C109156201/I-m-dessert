import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import YiiHoTangList from "../components/YiiHoTangList";
import yiihotang from "../json/yiihotang.json";
import StoreContent3 from '../components/StoreContent3';
import MySelect from '../components/MySelect';
import { theme } from 'antd';
// import _ from 'lodash';

function Store3() {
    const {
        token: { colorBgBase, colorTextBase },
    } = theme.useToken();

    const { sort } = useParams();
    const _yiihotang = !sort
    ? yiihotang
    :yiihotang.filter(
        x => x?.sort.toUpperCase() === sort.toUpperCase()
    );
    // const title = _.startCase(categoryName);

  return (

    <div className="maincontainer mainLayout">
      <Helmet>
        <title>一禾堂</title>
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
      <StoreContent3/>
      <MySelect/>         
      <YiiHoTangList yiihotang={_yiihotang} className="layoutContent" />
      <Footer className="layoutFooter" />
    </div>
  );
}

export default Store3;
