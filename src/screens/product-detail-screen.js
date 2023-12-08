import axios from "axios"
import { useEffect } from "react"
import { useParams } from "react-router-dom"









const ProductDetailScreen =()=>{

    const data=useParams()
    console.log(data)



    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${data.id}`)
        .then(response=>console.log(response))
     

    },[data.id])

    return(
        <>
        <h1> am from product detail screen </h1>
        <h2> you selected a product whose id is {data.id}</h2>
        </>
    )
}

export default ProductDetailScreen