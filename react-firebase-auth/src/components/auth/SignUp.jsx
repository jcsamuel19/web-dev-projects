import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react"; // useStates are used to store the values that are going to be pasts by the users to the input fields
import { auth } from "../../firebase";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => { // handles logic when form is submitted
        e.preventDefault(); // when form is sumbitted it does not refresh (so we don't lose the state of email and password)
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    };

  return (
    <div className="sign-in-container">
        <form onSubmit={signUp}> 
            <h1>Create an Account</h1>
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
            <button type="submit">Sign Up here</button>
        </form>
    </div>
  )
}

export default SignUp