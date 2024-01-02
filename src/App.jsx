import { getDatabase, ref, set } from "firebase/database";
import {app} from "../firebase"
import './App.css'
const db = getDatabase(app);
function App() {

  const putData = ()=>{
    set(ref(db, 'users/' + 1), {
      username: "Ravi Yadav",
      email: "ravi@gmail.com",
      role : "Frontend Developer"
    });
  }
  return (
    <div>
      <h1>Data</h1>
      <button onClick={putData}>Put Data</button>
    </div>
  )
  
}

export default App
