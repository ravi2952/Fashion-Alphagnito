import React from 'react'; 
import { BrowserRouter , Routes , Route } from 'react-router-dom'; 
import Home from '../pages/Home'; 
import ProductsPage from '../pages/ProductPage';
import Cart from '../components/Page3/Cart/cart';
import LoginPage from '../pages/LoginPage';

export default function App() { 
  return (
    <div>
        <BrowserRouter> 
            <Routes> 
                <Route path='/' element={<Home />} /> 
                <Route path='/Product' element={<ProductsPage />}/>
                <Route path='/product/:productId' element={<Cart />}/>
                <Route path='/Login' element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
