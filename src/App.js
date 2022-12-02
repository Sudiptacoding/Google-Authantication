import './App.css';

import { auth } from './firebase.config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

// npm install --save firebase@9
// version 9.14.0 

import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: ''
  })

  const onChange = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        setUser({
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        })
      }).catch((error) => {
        console.log(error)
      });
  }

  const signOutChange = () => {
    signOut(auth).then(() => {
      setUser({
        isSignedIn:false,
        name:'',
        photo:'',
        email:''
      })
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="App">
      <div><h1>Pleasse Sign In Your Google Acount</h1></div>
      {
        user.isSignedIn &&
        <div>
          <h1>My name is {user.name}</h1>
          <h1>My email is {user.email}</h1>
          <div>My photo is <img src={user.photo} alt="" /> </div>
        </div>
      }
      {
        user.isSignedIn ? <button onClick={signOutChange}>Sign Out</button> : <button onClick={onChange}>Sign In</button>

      }
      
      
    </div>
  );
}

export default App;
