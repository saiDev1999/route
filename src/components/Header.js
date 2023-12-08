import { Link } from "react-router-dom"
import "./header.css"






const Header = () =>{
    return(

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item navigation" style={{marginRight:20}} >

                <Link to={"/"} >
               Flipkart
                </Link>
           
            </li>
            <li class="nav-item navigation"  style={{marginRight:20}}>
            
            <Link to={"/contact"} >
               Contact
                </Link>
            </li>
            <li class="nav-item navigation"  style={{marginRight:20}}>
            <Link to={"/menu"} >
               Menu
                </Link>
            </li>
            <li class="nav-item"  style={{marginRight:20}}>
            <Link to={"/about"} >
               About
                </Link>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> */}
          </ul>
        </div>
      </nav>

    )
}

export default Header