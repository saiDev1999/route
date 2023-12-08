import logo from './logo.svg';
import './App.css';
import NavigationStack from './navigation/navigation';
import { createContext, useState } from 'react';



export const Theme = createContext()

function App() {
  const [darkTheme,setDarkTheme]=useState(false)
  const changeTheme =()=>{
    debugger
    setDarkTheme(!darkTheme)
  }
  return (
    <Theme.Provider value={{darkTheme,changeTheme}} >
          <NavigationStack/>
    </Theme.Provider>

  );
}

export default App;



// task 
// 1.Repeat the class (attemp the quiz)
// 2. Login authentication 
// 3. Pending classes 
// 4. Add to cart functionality with navigation (no duplicates allowed)






