import React, { useState , useEffect} from 'react'
import {commerce} from "./components/Ecommerce"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './components/MainNav';
import Home from "./components/Home"
import Cart from "./components/Cart"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'animate.css';
import { Provider } from 'react-redux';
import { ScaleLoader } from 'react-spinners'
import { RingLoader } from 'react-spinners'

// import Store from './Store/Store';
// import Counter from './components/Counter';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)

  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });
    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };


  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };



  useEffect(() => {
    fetchProducts();
    fetchCart();

  }, []);

  // console.log(products); // 2 product 
  // console.log(cart); //


// const [count, setCount] = useState(0)
// with func
// if ( count < 0 ) {
//   setCount (0)
// } 

// with ternary operator
  //  {count<0 && setCount(0) }



  // const [loading , setLoading] = useState(false);
  // useEffect(() =>{
  //         setLoading(true)

  //         setTimeout(() =>{
  //             setLoading(false)
  
  //         } , 2000)
  
  //     },[])
  return (
    // <Provider  store={Store}>

    <div style={{position:"relative"}}>
{/* {      loading 
    ? 
    <RingLoader  color="rgba(0, 1, 255, 1)"
    size={300}
     style={{position:"fixed", left:"calc(50vw - 150px)" , top:"calc(50vh - 150px"} }  /> 
: */}
<BrowserRouter>
    
    <MainNav cart={cart} style={{zIndex:"9999999"}}  className="NavHeightOnHome"  />  

<Routes>
  <Route path='/' element={<Home products={products} cart={cart} onAddToCart={handleAddToCart}/>} />
  <Route path='/cart' element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>} />
  
  {/* <Route /> */}

</Routes>

    </BrowserRouter>


    
    {/* <Counter  store={Store} /> */}
    </div>    
    // </Provider>

  )
}




export default App;