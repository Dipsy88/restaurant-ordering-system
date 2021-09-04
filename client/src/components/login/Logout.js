import React from 'react';
const Logout = ({ setToken }) => {
  const sleep = delay => new Promise(resolve => setTimeout(resolve, delay));

  const waitTime = async () => {
    await sleep(4000);
    setToken([]);
  };
  waitTime();

  return (
    <div className="ui icon message">
      <i className="notched circle loading icon"></i>
      <div className="content">
        <div className="header">Logging out</div>
      </div>
    </div>
  );
};

export default Logout;
