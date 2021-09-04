import { useState } from 'react';

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());
  const saveToken = userToken => {
    console.log(JSON.stringify(userToken));

    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    token,
    setToken: saveToken,
  };
};

export default useToken;