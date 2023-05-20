import {useState,useEffect} from "react"
import "./Cards.css"
import axios from "axios"
import {useParams,Link} from "react-router-dom"


function Cards() {
    const [apiData,setApiData]=useState([])
    const  data= async()=>{
        const products=await axios.get("https://fakestoreapi.com/products")
        setApiData(products.data)
    }
    useEffect(()=>{
        data();
    },[])

const params=useParams();


  return (
    <>
    <h1 class="animate__animated animate__heartBeat text-center">An animated element</h1>
    <div className="d-flex justify-content-evenly align-items-center flex-wrap ">
    {
        apiData.map((item)=>{
            return(
                <div class="card" style={{width: "18rem"}}>
                
  <img src={item.image} class="card-img-top" style={{width:"50%",height:"200px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{item.title.slice(0,5)}</h5>
    <p class="card-text">{item.description.slice(0,50)}</p>
    <Link to={`/products/${item.id}`} class="btn btn-primary">Rs{item.price}</Link>
  </div>
</div>
            )
        })
    }
    </div>
    </>
  )
}

export default Cards
