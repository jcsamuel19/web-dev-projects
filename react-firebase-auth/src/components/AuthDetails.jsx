import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
/*
 * Writes the logic to checks if a user is signed in or not and what user it is
*/

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(( ) => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        
        return () => {
            listen();
        }
    }, []) // empty array for dependence so it runs when the component loads
        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log('sign out successful')
            }).catch(error => console.log(error))
        }
    
  return (
    <div>{ authUser ? <><p>{`Signed in as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed out</p>}</div>
  )
}

export default AuthDetails