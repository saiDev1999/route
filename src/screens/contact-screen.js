import {useContext} from 'react';
import Header from '../components/Header';
import {Theme} from '../App';
import ParentComponent from '../components/hooks/useCallback /parentComponent';
import useCounter from '../components/hooks/customHook/useCounter';
import ButtonReuse from '../components/button-reuse/button-reuse';

const ContactScreen = () => {
  const darkMode = useContext(Theme);
  const [count, increment, decrement, reset] = useCounter(100,10);
  return (
    <>
      <Header />
      <h1>I am from contact screen </h1>
      <h1>{count}</h1>
       <ButtonReuse increment={increment} decrement={decrement} reset={reset} />
    </>
  );
};

export default ContactScreen;
