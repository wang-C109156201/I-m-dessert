import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"
// import store from './redux/store';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import { darkTheme, lightTheme } from './theme';
import Router from './Router';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
function App() {
  return (

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>


  )
}

export default App;
