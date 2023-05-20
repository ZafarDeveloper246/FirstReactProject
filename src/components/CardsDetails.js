import React, { useEffect, useState } from 'react'
import axios from 'axios'
function CardsDetails() {

const data=axios.get("https://fakestoreapi.com/products/1")


console.log(data.data);


  return (
    <div>
     
    </div>
  )
}

export default CardsDetails
