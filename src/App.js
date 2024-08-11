
import {createUserWithEmailAndPassword} from "firebase/auth"
import {app} from './firebase';
import './App.css';
import { getAuth } from 'firebase/auth';



import HOME from "../src/pages/HOME";


const auth =getAuth(app);

function App() {

     const signupUser=()=>{
      createUserWithEmailAndPassword(
        auth,
        'chhariji_07@gmail.com',
        'justfuckit07'
        
        ).then((value)=>console.log(value));
        
        ;
};

  return (
    <div className="App">
      <HOME />
    </div>
  );
}

export default App;