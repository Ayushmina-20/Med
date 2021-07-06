import React , {useEffect,useState} from 'react';
import Docabout from './Docabout';
import Usersabout from './Usersabout';
//{user.Temperature.map((temp,i)=> <h1 key={i}>{temp.temp}</h1>)}
const About =()=>{

    const [role,setRole] =   useState()

    useEffect(()=>{
        const res=localStorage.getItem("Role")
        setRole(res)
        console.log(res,role)
    })
    return(
        <div>
            {role==='Doctor'?<Docabout/>:<Usersabout/>}
        </div>
    )
}
        
    


export default About;