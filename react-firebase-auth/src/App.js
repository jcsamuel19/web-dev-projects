import logo from './logo.svg';
import './App.css';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp'
import AuthDetails from './components/AuthDetails';

function App() {
  return (
    <div className="App">
      <Signin />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;
