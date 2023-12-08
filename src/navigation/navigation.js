import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from '../screens/home-screen';
import AboutScreen from '../screens/about-screen';
import MenuScreen from '../screens/menu-screen';
import ContactScreen from '../screens/contact-screen';
import InvalidScreen from '../screens/invalid-screen';
import ProductDetailScreen from '../screens/product-detail-screen';
import PostAuthNavigation from './post-auth/post-auth';
import PreAuthNavigation from './pre-auth/pre-auth';
import { useState } from 'react';
import { createContext } from 'react';



export const Login = createContext()

const NavigationStack = () => {


  const[login,setLogin]=useState(false)



  const handleLogin =()=>{
    setLogin(true)
  }

  return (
    <Login.Provider value={{login,handleLogin}} >


    <BrowserRouter>
 
        {
        login ?
          <PostAuthNavigation/>
          :
          <PreAuthNavigation/>


        }


    </BrowserRouter>
    </Login.Provider>
  );
};

export default NavigationStack;





// task :


