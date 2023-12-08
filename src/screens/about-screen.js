import Header from "../components/Header"
import ChildB from "../components/component-tree/ChildB"
import ParentComponent from "../components/component-tree/Parent"










const AboutScreen = () =>{

    return(
        <>
               <Header/>
        <h1>I am from about screen </h1>

        <ChildB/>

        {/* <ParentComponent/> */}
        </>
    )
}


export default AboutScreen
