import React,{useState} from "react";
import LoginForm from "./components/LoginForm";

function App(){
const adminUser={
  email:"admin@gmail.com",
  password:"admin@123"
}

const [user,setUser]=useState({name:"",email:""})
const [error,setError]=useState("")

const Login=(details)=>{console.log(details)}
const Logout=()=>{console.log("logout");}


  return(
    <div className="App">
       {(user.email!="")?(
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
       ):(
        <LoginForm Login={Login} error={error}/>
       )}
    </div>
  )
}


export default App