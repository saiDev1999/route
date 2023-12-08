import {useState} from 'react';

const useCounter = (a=0,b=1) => {
  const [count, setCount] = useState(a);

  const increment = () => {
    setCount(count + b);
  };
  const decrement = () => {
    setCount(count - b);
  };
  const reset = () => {
    setCount(0);
  };

  return [count,increment,decrement,reset]
};

export default useCounter
