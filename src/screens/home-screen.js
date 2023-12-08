import { Link } from "react-router-dom"
import Header from "../components/Header"
import { useContext } from "react"
import { Theme } from "../App"
import useAxios from "../components/hooks/customHook/axios/useAxios"
import { product_listing_api } from "../endPoints/apis"


const HomeScreen = () =>{
const darkMode = useContext(Theme)


  const [data]=useAxios(product_listing_api)
  
  console.log(data,"result_from_useAxios")

console.log(darkMode,"checking the global state")
    return(
        <>
        <Header/>
        <h1>I am from home screen </h1>

        <div style={{height:"100px",width:"100px",backgroundColor:  darkMode.darkTheme?"black":"green"}} >


        </div>
        <button onClick={()=>darkMode.changeTheme()} > Click to change the theme</button>



        {

      [1,2,3,4,5,6,5].map((item,index)=>{
        return(

            <h5 key={index} >
                <Link  to={`/product/${item}`} >{item}</Link>
            </h5>

        )
      })

        }
        </>
    )
}


export default HomeScreen





// task :
// 1.Repeat the class 
// 2. Complete the class 
