import 'antd/dist/reset.css';
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Product />}/>
        {/* <Route path="category/:categoryName" element={<Home />} />
        <Route path="id/:productId" element={<Product />} />
      </Route> */}
    </Routes>
  </BrowserRouter> 
    )
}

export default App;
