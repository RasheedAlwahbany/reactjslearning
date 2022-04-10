import React from 'react';
import Home from './home';
import About from './about';
import Products from './products';
import Error from './error';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
const Indexs = () => {
    
    return ( 
        <BrowserRouter>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about/1">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>
            </div>
            <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about/:id' element={<About />}/>
            <Route path='/products' element={<Products />}/>
            <Route path='*' element={<Error />}/>
                
            </Routes>
        </BrowserRouter>
        
        
    );
}
    
export default Indexs;
