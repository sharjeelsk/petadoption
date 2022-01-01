import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import SignUp from './components/Auth/SignUp'
import LogIn from './components/Auth/LogIn'
import Landing from './components/Adopt/Landing';
import AdoptionForm from './components/Adopt/AdoptionForm';
import PetRequests from './components/Adopt/PetRequests';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/landing" component={Landing} />
      <Route path="/addpet" component={AdoptionForm} />
      <Route path="/petrequests" component={PetRequests} />
    </Switch>
  );
}

export default App;
