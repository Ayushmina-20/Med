import React , {useEffect,useState} from 'react';
//
const Userabout =()=>{

    const [users,setUsers] =   useState("")

    useEffect(()=>{
        const email=localStorage.getItem("email");
        console.log('hello',email)
        fetch("/userDetails",{
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
            if(data.Temperature.length>0){
                console.log(data)
            setUsers(data)
            }
            else{
                alert('somethng went wrong with server , check once  !')
            }
            
            
        })
        .catch(err=>alert('something went wrong with server'))
    },[])
    
    
        
        
            // <div>
            // <p>{users.name}</p>
            // {users.Temperature.map((temp,i)=><p key={i}>{temp}</p>)}
            // </div>
            return(
            <>
            <div>
            <h2>My Health Report</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center"></div>
            <div className=" col-10 col-md-6 mt-5">
            <div className="card p-2">
                      <div className="d-flex align-items-center">
                            
                          <div className="ml-3 w-100">
                                  <h4 className="mb-0 mt-0 textLeft"> {users.name} </h4>
                                  
                              <div className="p-2 mt-2 bg-dark d-flex justify-content-between rounded text-white stats">
                                      <div className="d-flex flex-column">
                                          <span className="articles">Temperature</span>
                                           {users.Temperature.map((temp,i)=><span className="number1" key={i}>{temp}</span>)}
                                            </div>
                                      <div className="d-flex flex-column">
                                          <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                      <div className="d-flex flex-column">
                                          <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                    <div className="d-flex flex-column">
                                          <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                              </div>
                            
                          </div>
                          
                         
                   </div>
                </div>
          </div>
            
</div>

    </div>    
        
           
        
      </>  
    )
}
        
    


export default Userabout;