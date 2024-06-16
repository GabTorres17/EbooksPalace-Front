import ProductCard from './ProductCard';
import styles from './Cards.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';


 const Cards = () => {
  const [Info, setInfo ] = useState([])
  useEffect(async()=>{
    const {data} = await axios.get("http://localhost:3001/books");
    console.log(data);
    setInfo(data)
  },[])


  

   return <div className={styles.Cards}>
         {Info.map((data)=>{
          console.log(data);
           <ProductCard
           id={data.id}
           name={data.name}
           author={data.author}
           editorial={data.editorial}
           price={data.price}
           category={data.category}  
           image={data.image}
           dresciption={data.dresciption}
          /> 

         })}   
          
    
   </div>;
   }

export default Cards;