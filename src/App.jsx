import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Category from './pages/Category'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from "react-helmet-async"

function App() {
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="products" element={<Product />}/> */}
          <Route path="products">
            <Route path="category" element={<Category />} />
            <Route path="id/:productId" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App;
