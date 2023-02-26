import logo from './logo.svg';
import './App.css';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp'

function App() {
  return (
    <div className="App">
      <Signin />
      <SignUp />
    </div>
  );
}

export default App;
