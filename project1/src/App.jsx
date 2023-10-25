import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Section from './section'
import Section1 from './Section1'

function App() {

  const [products,setProducts] = useState([])


  // fetch , useeffect


  useEffect(()=>{

    fetch('https://dummyjson.com/products').then((res)=>res.json()).then((result)=>{
      console.log(result,'------');
    
      setProducts(result.products);
    })


  },[])



  return (
    <>
     <Header/>
     <Section/>
     <h6 className="text-danger">Today's</h6>
        <h4>Flash sales</h4>
     
     {
        products.map(({title,thumbnail})=>{
          return(
<Section1 image={thumbnail} title={title}/>
          )})
        
      }
      
   
    
    </>
  )
}

export default App
