import './App.css';
import Products from './components/Products';
import Navbar from './Navbar/Navbar';
import { commerce } from './lib/commerce';
import { useEffect, useState } from 'react';


function App() {

  // const [products, setProducts] = useState([])
  
  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // }

  // useEffect(()=> {
  //   fetchProducts()
  // }, [])
  
  return (
    <div className="App">
      <Navbar />
      <Products/>
    </div>
  );
}

export default App;
