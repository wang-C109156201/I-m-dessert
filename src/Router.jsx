import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import Home from './pages/Home'
import Category from './pages/Category';
import Product from './pages/Product';
import Store from './pages/Store';
import Store2 from './pages/Store2';
import Store3 from './pages/Store3';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";

function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;
  return (
    <ConfigProvider theme={theme} >
      <HelmetProvider context={{}}  >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="products" element={<Product />}/> */}
            <Route path="products">
              <Route path="category" element={<Category />} />
              <Route path="id/:productId" element={<Product />} />
            </Route>
            <Route path="store">
              <Route path="store" element={<Store/>} />
              <Route path="store1/:sort" element={<Store />} />
            </Route>
            <Route path="store2">
              <Route path="hippun" element={< Store2/>} />
              <Route path="hippun2/:sort" element={< Store2/>} />
            </Route>
            <Route path="store3">
              <Route path="yiihotang" element={< Store3/>} />
              <Route path="yiihotang3/:sort" element={< Store3/>} />
            </Route>
            <Route path="auth">
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ConfigProvider>
  );
}

export default Router;
