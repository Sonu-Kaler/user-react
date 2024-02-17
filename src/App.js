import React,{useState} from "react";
import style from "./style.css";
const App=()=>{
    const [user,setUser] = useState({name:"",email:"",password:"",confirmPassword:""});
    const {email,password,confirmPassword}=user;
    // const [message,setMessage]=useState("");
    function submitUser(e){
        e.preventDefault();
        if(!email || !password || !confirmPassword){
            alert("Please fill all the fields");
        }
        else if(password !== confirmPassword){
            alert("Password and Confirm Password must be same");
        }
        else{
            alert("Form Submitted Done");
        }
    }
    function updateUser(e){
        console.log(e.target.name, e.target.value);
        let key = e.target.name;
        setUser({...user,[key]:e.target.value});
    }
    return(
        <div className="container">
            <form onSubmit={submitUser}>
            <div className="ft">
            <label>Email : </label>
            <input type="email" onChange={updateUser} value={email} name="email"/>
            </div>
            <div className="ft">
            <label>Password : </label>
            <input type="password" onChange={updateUser} value={password} name="password"/>
            </div>
            <div className="ft">
            <label>Confirm Password : </label>
            <input type="password" onChange={updateUser} value={confirmPassword} name="confirmPassword"/>
            </div>
            <button className="btn">Sign Up</button>
            </form>
        </div>
    )
}

export default App;