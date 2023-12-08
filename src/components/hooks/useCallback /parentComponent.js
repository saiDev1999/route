// useCallback : it is a hook which is used to prevent Un-necsaary re-rendering by memorizing
// the function

import {useCallback, useState} from 'react';
import Value from './value';
import Button from './button';

const ParentComponent = () => {
  const [age, setAge] = useState(30);
  const [salary, setSalary] = useState(100000);

  const handleSalary = useCallback(
    value => {
      setSalary(salary + value);
    },
    [salary]
  );

  const handleAge = useCallback(
    value => {
      setAge(age + value);
    },
    [age]
  );

  return (
    <>
      <h1>hello i am useCallback example</h1>
      <Value value={age} />
      <Button handleIncrement={handleAge} value={'age'} />
      <Value value={salary} />
      <Button handleIncrement={handleSalary} value={'salary'} />
    </>
  );
};

export default ParentComponent;
