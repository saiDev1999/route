import {useContext} from 'react';
import Header from '../components/Header';
import {Theme} from '../App';
import UseReducer from '../components/hooks/useReducer/useReducer';
import useAxios from '../components/hooks/customHook/axios/useAxios';
import {user_list} from '../endPoints/apis';
import useCounter from '../components/hooks/customHook/useCounter';
import ButtonReuse from '../components/button-reuse/button-reuse';

const MenuScreen = () => {
  const darkMode = useContext(Theme);

  const [data] = useAxios(user_list);
  const [count, increment, decrement, reset] = useCounter(10, 2);

  return (
    <>
      <Header />
      <h1>{count}</h1>
      <ButtonReuse increment={increment} decrement={decrement} reset={reset} />
    </>
  );
};

export default MenuScreen;

// react-router-dom
