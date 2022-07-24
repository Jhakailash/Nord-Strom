import Navbar from './components/Navbar';
import Home from './components/Home'
import Footer from './components/Footer';
import Signup from './components/Signup';
import Createaccount from './components/Createaccount';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Products from './components/Products';
import Productslider from './components/Productslider';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { others } from '@chakra-ui/react';

function App() {
  const [email,setEmail] = useState("");

  const [cart, setCart] = useState([]);

  

  const handleChange = (item, d) => {

    let tmp = cart;
    let tmpArr = tmp.map(t=>{
      if(t.id === item.id){
        if(d==-1 && t.qty>1){
          t.qty = t.qty-1;
          t.qty_price = t.qty*t.price;
        }else if(d==1){
          t.qty = t.qty+1;
          t.qty_price = t.qty*t.price;
        }
        
      }
      return t;
    });
    setCart([...tmpArr]);
    
    /* const ind = cart.indexOf(item);
    console.log(ind)
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]); */
  };

  return (
    <div className="App">

      <Navbar size={cart.length}/>

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="create/account" element={<Signup setEmail={setEmail}/>} />
          <Route path="create/account/form" element={<Createaccount email={email} />} />
          <Route path="product/list" element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
          
          {/* <Route path="dashboard" element={ <PrivateRoute>  <Dashboard /> </PrivateRoute> } /> */}
        </Routes>
        <Products />
        {/* product sider area */}

        

      
      <Footer />
    </div>
  );
}

export default App;
