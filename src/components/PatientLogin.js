import React ,{useState} from 'react';
import signpic from "../images/signup.png";
import { NavLink,useHistory } from "react-router-dom";
import "./plogin.css";

const PatientLogin = () => {
    const history=useHistory();
    const [user,setUser]=useState(
        {
            email:"",password:""
        }
    );

let name,value;
const handleInputs =(e)=>{
console.log(e);
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
}

const PostData=async (e)=>{
    e.preventDefault();
    const{email,password}=user;
    const res=await fetch("/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            email,password
        })
    });
    const data=await res.json();
    if(data.status===422 || !data ){
        window.alert("Invalid Registration");
    }
    else{
        console.log("Succesful registration");
        localStorage.setItem("email",email);
        history.push("/About");
    }

}
    return (
        <>
        <section className="sign-in row d-flex justify-content-center">
            <div className="container mt-5 col-md-6 ">
                <div className="signin-content">

                    <div className="signin-image">
                    <figure>
                                <img src={signpic} alt="login pic" width="200" height="200"/>
                                </figure>
                        
                            <NavLink to="/patientregistration" className="signup-image-link">
                                Create an Account
                            </NavLink>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-email"></i>
                                </label>
                                <input type="text" name="email" id="email" autoComplete="off"
                                value={user.email}
                                onChange={handleInputs}
                                    placeholder="Your Email"/>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icons-doctor"></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                                    placeholder="Your Password"/>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit"
                                    value="Log In" onClick={PostData}/>
                            </div>
                        </form>
                        </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default PatientLogin
