import './App.css';
import firebaseConfig from './private.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {useAuthState} from 'react-firebase-hooks/auth'
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);


function App() {
const [user] = useAuthState(auth)
  return (
  <div className="App">
    <header>
    <h1> Kaott ChatBox </h1>
    <Logout/>
      
    </header>

    <section>
    { user ?   <Chat/> : <Login/> }
    </section>
  </div>

  );
}

function Login() {
  const googleSignIn = ()  => {
    const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
 }

return (
  <>
<button onClick={googleSignIn}> Sign in with Google </button>
</>
)
}

function Logout() {
const googleSignOut = () => { signOut (auth)}
return (
  
  auth.currentUser && <> <button onClick={googleSignOut}> Sign Out </button> </>
  
 
)
}



function Chat(){
console.log(auth)
return (
<>
<main class='chatroom'>

<Message message="Mon premier message" />

</main>

<form>

<input type='text' placeholder='Say Hi!'/>
<button type='submt'> Send </button>
</form>

</>

)

}


function Message(props) {
return (
  <>
  <div>
    <img alt="Avatar" src="https://avatars.dicebear.com/4.5/api/human/reyact-chat.svg?w=96&h=96"></img>
    <p> {props.message}</p>
  </div>
  </>

)
}


export default App