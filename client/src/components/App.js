import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Order from './order/Order';
import Header from './Header';
import HeaderLoggedOut from './HeaderLoggedOut';
import RetrieveOrder from './order/RetrieveOrder';
import UpdateOrder from './order/UpdateOrder';
import RetrieveProcessedOrder from './order/RetrieveProcessedOrder';
import RetrieveCompletedOrder from './order/RetrieveCompletedOrder';
import Login from './login/Login';
import useToken from '../hooks/useToken';
import Logout from './login/Logout';

const App = () => {
  const { token, setToken } = useToken();
  if (typeof token === 'undefined') {
    return (
      <div className="ui container">
        <BrowserRouter>
          <div>
            <HeaderLoggedOut />
            <Route path="/" exact component={Order}></Route>
            <Route
              path="/login"
              exact
              component={() => <Login setToken={setToken} />}
            ></Route>
            <Route exact path="/logout">
              <Redirect to="/" />
            </Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
  <Redirect push to="/orders" />;
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Order}></Route>
          <Route path="/check" exact component={RetrieveOrder}></Route>
          <Route path="/menu"></Route>
          <Route path="/update-order/:id" exact component={UpdateOrder}></Route>
          <Route
            path="/process-order/"
            exact
            component={RetrieveProcessedOrder}
          ></Route>
          <Route
            path="/complete-order/"
            exact
            component={RetrieveCompletedOrder}
          ></Route>
          <Route
            path="/logout/"
            exact
            component={() => <Logout setToken={setToken} />}
          ></Route>
          <Route exact path="/login">
            <Redirect to="/" />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
