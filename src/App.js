import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Routing, Route, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard"
import Signin from "./Pages/SignIn/Signin"
import Goverments from "./Components/Goverments/Goverments"
function App() {
  return (
    <Routing>
    <div>
      <Switch>
 
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/login" component={Signin}></Route>
        <Route path="/goverments" component={Goverments}></Route>
     
      </Switch>
    </div>
  </Routing>
  );
}

export default App;
