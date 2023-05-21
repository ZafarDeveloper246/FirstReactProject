import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
function CardsDetails() {

  const params=useParams();
  const [dataa,setData]=useState()
  
  const singleData=async()=>{
 
      
  }
useEffect(async()=>{
  const data= await axios.get(`https://fakestoreapi.com/products/${params.id}`)
  setData(data.data);
})

  return (
    <div className='d-flex'>
    </div>
  )
}

export default CardsDetails
