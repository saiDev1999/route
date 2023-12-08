import axios from 'axios';
import React, {useContext, useState} from 'react';
import {Login} from '../../navigation/navigation';

function LoginScreen() {
  const [username, setUsername] = useState('');
  const loginHandler = useContext(Login);

  console.log(loginHandler);

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    console.log(username);

    const loginObject = {
      username: 'kminchelle',
      password: '0lelplR',
    };

    try {
      axios
        .post('https://dummyjson.com/auth/login', loginObject)
        .then(response => {
          if (response.status === 200) {
            loginHandler.handleLogin()
      
          } else {
            alert('invalid details');
          }
        });
    } catch (err) {
      alert('error occurred');
      console.log('error occurred');
    }

    // fire base
  };

  return (
    <div>
      <h1>login screen</h1>
      <input
        value={username}
        onChange={handleUsername}
        placeholder="please enter username or email"
      />
      <button onClick={handleLogin}>Click to login</button>
    </div>
  );
}

export default LoginScreen;
