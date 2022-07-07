import './App.css';
import Products from './components/Products';
import Navbar from './Navbar/Navbar';
import { useEffect, useState } from 'react';


function App() {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    fetchProducts();
   }, [])

   const fetchProducts = async () => {
    const data  = await fetch('https://fakestoreapi.com/products');
    const jsonData = await data.json();
    console.log(jsonData)
    setProducts(jsonData)
    
  }
  
  return (
    <div className="App">
      <Navbar />
      <Products products = {products}/>
    </div>
  );
}

export default App;
