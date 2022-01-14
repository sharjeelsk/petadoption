import './App.scss';
import {Switch,Route}  from 'react-router-dom'
import Home from "./components/Home"
import SignUp from './components/Auth/SignUp'
import SignIn from './components/Auth/SignIn'
import Landing from './components/Adopt/Landing';
import AdoptionForm from './components/Adopt/AdoptionForm';
import PetRequests from './components/Adopt/PetRequests';
import VerifyOtp from './components/Auth/VerifyOtp'
import Recieved from './components/Adopt/Recieved'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/landing" component={Landing} />
      <Route path="/addpet" component={AdoptionForm} />
      <Route path="/petrequests" component={PetRequests} />
      <Route path="/verifyotp" component={VerifyOtp} />
      <Route path="/recieved" component={Recieved} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}

export default App;
