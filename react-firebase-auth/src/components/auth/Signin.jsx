import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"; // useStates are used to store the values that are going to be pasts by the users to the input fields
import { auth } from "../../firebase";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => { // handles logic when form is submitted
        e.preventDefault(); // when form is sumbitted it does not refresh (so we don't lose the state of email and password)
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    };

  return (
    <div className="sign-in-container">
        <form onSubmit={signIn}> 
            <h1>Sign into your account</h1>
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} // picks up the value from what the user inputs
            ></input>
            <input 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} // picks up the value from what the user inputs
            ></input>
            <button type="submit">Log In</button>
        </form>
    </div>
  )
}

export default Signin