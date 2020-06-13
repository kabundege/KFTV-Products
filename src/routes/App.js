import React from 'react';
import '../styles/App.css';
import Nav from '../components/layout/navbar';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Landing from '../components/dashboard/landing';
import Footer from '../components/layout/footer';
import Login from '../components/Auth/login';
import Invite from '../components/Auth/Invite';
import Forgot from '../components/layout/forgotPass';
import Reset from '../components/Auth/reset';
import Dash from '../components/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/dash" component={Dash}/>
          <Route path="/login" component={Login}/>
          <Route path='/invite' component={Invite}/>
          <Route path="/forgot" component={Forgot}/>
          <Route path="/reset" component={Reset}/>
        </Switch>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
