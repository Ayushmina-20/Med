import React , {useEffect,useState} from 'react';
//{user.Temperature.map((temp,i)=> <h1 key={i}>{temp.temp}</h1>)}
const Docabout =()=>{

       const [users,setUsers] =   useState([])
       
//yeh wala part fetch ke liye thik hai kya??han
//shi hai
       useEffect(()=>{
        const email=localStorage.getItem("email");
        console.log('hello',email)
        fetch("/allUsers",{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                email
            })
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUsers(data)
        })
    },[])
    return(
       <>
       <div>
       <h2>List of Patient</h2>
       <div className="container-fluid mt-5">
           <div className="row text-center">
               
           {

                   users.map((curElem,i) => {
                   
                       console.log(curElem.Temperature,'me')
                   return (
                         <div className="col-10 col-md-4 mt-5" key={i}>
                 <div className="card p-2">
                           <div className="d-flex align-items-center">
                                   
                               <div className="ml-3 w-100">
                                       <h4 className="mb-0 mt-0 textLeft">{curElem.name}  </h4>
                                       <h4 className="mb-0 mt-0 textLeft">{curElem.contact}  </h4>
                                      
                                   <div className="p-2 mt-2 bg-dark d-flex justify-content-between rounded text-white stats">
                                            {curElem.Temperature?
                                                <div className="d-flex flex-column">
                                                <span className="articles">Temperature</span>
                                                {curElem.Temperature.map((temp,i)=>
                                                 <span className="number1" key={i}>{temp}</span> 
 
                                                 )}
                                             </div>
                                             :
                                             null
                                            
                                            }
                                                
                                           <div className="d-flex flex-column">
                                               <span className="followers">Oxygen</span>
                                               {curElem.Oxygen.map((oxy,i)=>
                                                <span className="number1" key={i}>{oxy}</span> 

                                                )}</div>
                                           <div className="d-flex flex-column">
                                               <span className="rating">Pulse</span>                                    
                                               {curElem.Pulse.map((pulse,i)=>
                                                <span className="number1" key={i}>{pulse}</span> 

                                                )} </div>
                                   </div>
                                 
                               </div>
                        </div>
                     </div>
               </div>
                   )
           })        

           }
               
           </div>
       </div>
   </div>
       </>
    )
    
}
        
    


export default Docabout;