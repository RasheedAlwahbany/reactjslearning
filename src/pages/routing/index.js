import React from 'react';
import Home from './home';
import About from './about';
import Products from './products';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
const Indexs = () => {
    return ( 
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
            <Routes>
            <Route  path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/products' element={<Products />}/>
                
            </Routes>
        </BrowserRouter>
        
        
    );
}
    
export default Indexs;
