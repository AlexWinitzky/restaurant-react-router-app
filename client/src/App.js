import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Menu from './components/Menu'
// import logo from './logo.svg';
// import './App.css';

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/menu" component={Menu} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
  );
  
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Dope Restaurant</h1>
//         <div className="App-intro">
//         </div>
//       </div>
//     );
//   }
// }

export default App;
