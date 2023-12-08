import {useReducer, useState} from 'react';

function reducerFunction(state, action) {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return {...state, count: state.count + 1};
    case 'DECREMENT_COUNT':
      return {...state, count: state.count - 1};
    case 'RESET_COUNT':
      return {...state, count: 0};
    case 'INCREMENT_COUNT_BY_100':
      return {...state, count: state.count + action.payload};
    case 'CHANGE_NAME':
      return {...state, name: action.payload};
    default:
      return state;
  }
}

const UseReducer = () => {
  const [inputValue, setInputValue] = useState(0);
  const [name, setName] = useState('');

  const initialValue = {
    count: 10,
    name: 'sai',
    todos: [],
  };

  const [currentValue, dispatch] = useReducer(reducerFunction, initialValue);
  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT_COUNT',
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'DECREMENT_COUNT',
    });
  };
  const handleIncrementBy100 = () => {
    dispatch({
      type: 'INCREMENT_COUNT_BY_100',
      payload: inputValue,
    });
  };

  const handleName = event => {
    setName(event.target.value);
  };

  const handleChangeName = () => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: name,
    });
    setName('');
  };

  return (
    <>
      <h1>useReducer Example</h1>
      <h1>{currentValue.count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="number"
        value={inputValue}
        onChange={event => setInputValue(Number(event.target.value))}
      />
      <button onClick={handleIncrementBy100}>Increment by 100</button>
      <button>Reset</button>
      <input type="text" value={name} onChange={handleName} />
      <button onClick={handleChangeName}>Change Name</button>
      <h2>{currentValue.name}</h2>
    </>
  );
};

export default UseReducer;

// useReducer : it is a hook which is used to manage the state
//  when there is complex logic in the component state

// const[currentValue,dispatch]=useReducer(reducerFunction,initialValue)
