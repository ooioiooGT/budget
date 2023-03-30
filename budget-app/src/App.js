// import Signup from "./page/Signup";

import { signout } from "./api/firebase";
import Login from "./page/Login";

function App() {

  async function handlesingout(){
    try{
      await signout ();
      console.log("log out")
    }catch{

    }
  }
  return (
    <div className="App">
        <Login />
        <button onClick={handlesingout}>Sing Out </button>
    </div>
  );
}

export default App;
