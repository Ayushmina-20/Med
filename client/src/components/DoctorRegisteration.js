import React , {useState} from 'react'
import signpic from "../images/signup.png";
import { NavLink ,useHistory} from "react-router-dom";

const DoctorRegistration = () => {
    const history=useHistory();
    const [user,setUser]=useState(
        {
            name:"",email:"",contact:"",password:""
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
    const{name,email,contact,password}=user;
    const res=await fetch("/docsignup",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            name,email,contact,password
        })
    });
    const data=await res.json();
    if(data.status===422 || !data ){
        window.alert("Invalid Registration");
    }
    else{
        console.log("Succesful registration");
        history.push("/DoctorLogin");
    }

}
    return (
        <>
        <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign Up</h2>
                        <form method = "POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label htmlFor="name">
                                <i class="zmdi zmdi-account material-icons-name"></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                                    placeholder="Your Name"/>
                            </div>
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
                                <label htmlFor="phone">
                                <i class="zmdi zmdi-phone-in-talk material-icons-phone"></i>
                                </label>
                                <input type="number" name="contact" id="contact" autoComplete="off"
                                value={user.contact}
                                onChange={handleInputs}
                                    placeholder="Your Phone"/>
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
                                <input type="submit" name="signup" id="signup" className="form-submit"
                                onClick={PostData}
                                    value="register"/>
                            </div>
                        </form>
                        <div className="signup-image">
                               
                        
                            <NavLink to="/doctorlogin" className="signup-image-link">
                                I am already register
                            </NavLink>
                        </div>
                        </div>
                </div>
            </div>
        </section>

        </>
    )
}

export default DoctorRegistration