import React, {useMemo, useState} from 'react';

function ChildComponent({text}) {
  const [counter, setCounter] = useState(0);

  const capitilize = useMemo(() => {
    console.log('capitilize');
    return text.toUpperCase();
  }, [text]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>{capitilize}</h2>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Click to Increment</button>
    </div>
  );
}

export default ChildComponent;
