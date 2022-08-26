import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
    <Router>
    <div className="App">
 

    <Switch>
    <Route path='/login'>
    <Login />
    </Route>


      <Route path='/checkout'>
      <Header/>
      <Checkout />
      </Route>

{/* Default route should be at the bottom */}
      <Route path='/'> 
      <Header/>
        <Home/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
