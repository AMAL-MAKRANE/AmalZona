import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import { useSelector } from 'react-redux';

function App() {
  const cart = useSelector(state => state.cart);
  const {cartItems} =cart;
  return (
    <BrowserRouter>
    <div className="grid-container">
      
            <header className="row">

                <div >
                    <Link className="brand" to="index.html">Amalzona</Link>
                </div>
                <div>
                    <Link to="/cart">Cart 
                    {
                      cartItems.length >0 && (
                        <span className='badge'>{cartItems.length}</span>
                    
                      )
                    }
                    </Link>
                    <Link to="/signin">Sign in</Link>
                </div>

            </header>
           
            <main>  
               <Route path="/cart/:id?" component={CartScreen} ></Route>
               <Route path="/product/:id" component={ProductScreen}></Route>
               <Route path="/" component={HomeScreen} exact></Route>
               
               
                    
            </main>
            <footer className="row center" >All right reserved</footer>


        </div>

   </BrowserRouter>
  );
}

export default App;
