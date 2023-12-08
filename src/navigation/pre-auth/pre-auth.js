import { Route, Routes } from "react-router-dom";
import LoginScreen from "../../screens/pre-auth-screen/login-screen";
import RegisterScreen from "../../screens/pre-auth-screen/register-screen";
import ForgotPasswordScreen from "../../screens/pre-auth-screen/forgot-password-screen";
import InvalidScreen from "../../screens/invalid-screen";


function PreAuthNavigation (){

    return(
        <Routes>
         <Route path="/" element={<LoginScreen/>} />
         <Route path="/register" element={<RegisterScreen/>} />
         <Route path="/forgotPassword" element={<ForgotPasswordScreen/>} />
         <Route path="*" element={<InvalidScreen/>} />   
         </Routes>
    )
}


export default PreAuthNavigation