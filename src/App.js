import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
// import { Link,useRoutes } from 'react-router-dom';

import Login from './Login';
import Home from './Home';

function App() {
  // const element = useRoutes([
  //   {
  //     path:"/",
  //     element:<Login />
  //   },
  //   {
  //     path:"/home",
  //     element:<Home />
  //   }
  // ])

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
           <Login />
        </Route>
        <Route path="/home">
           <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
