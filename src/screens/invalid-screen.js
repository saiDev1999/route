import { useNavigate } from "react-router-dom"



const InvalidScreen = () =>{

    const navigate = useNavigate()

    const handleNavigation = () =>{


        navigate("/register")

    }

    return(
        <>
        <h1>Please login to access internal routes </h1>
        <button onClick={handleNavigation} >Click to navigate to login</button>
        </>
    )
}


export default InvalidScreen
