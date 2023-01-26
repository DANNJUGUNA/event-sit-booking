import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEvents({addevent}) {
    const navigate = useNavigate();
    const[seats,setSeats]=useState([])
 const [formData, setFormData]=useState({
          EventName: "",
          Location: "",
          Date: "",
          Time: "",
          Capacity: 0,
          Seats:[...seats]
 })
 const handleOnChange = (event)=> {
    const fieldName=event.target.name;
    const fieldValue= event.target.value; 
    let arr=[];
    let i;
  const seat=(cap)=>{
    
      for(i=0;i<=cap-1;i++){
          return setSeats(arr.push(i+1))
      }
    
  }
  seat(event.target.Capacity.value)
    const newFormData={...formData};
    newFormData[fieldName]=fieldValue;
   
    setFormData(newFormData);
  }
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    postData(formData)
   }
 const postData=(data)=>{
    fetch("http://localhost:8000/events",{
        method:"POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json",
         },
         body:JSON.stringify(data)
    })
    .then((response)=>response.json())
    .then(data=>addevent(data))
setTimeout(() => navigate('/events'), 1000);
    
    }
    
 return (
   <div >
     <h1 className='d-grid gap-2 col-8 mx-auto text-white text-center'>WELCOME TO ADD EVENTS PAGE</h1>
     <form onSubmit={handleSubmit} className='container col-6 p-2 bg-secondary text-white text-bold rounded-4 
    border border-danger'>
       <div className>
        <div>
            <label  className="form-label fw-bolder" >EVENTNAME</label>
             <input  onChange={handleOnChange} type="text" 
             className="form-control form-control-sm" name="EventName" placeholder="Eventname" required/>
         </div>
         <div>
            <label  className="form-label fw-bolder">LOCATION</label>
             <input  onChange={handleOnChange} type="text" 
             className="form-control form-control-sm" name="Location" placeholder="Location" required/>
         </div>
         <div>
            <label  className="form-label fw-bolder">DATE</label>
             <input  onChange={handleOnChange} type="date" name="Date" 
             className="form-control form-control-sm" placeholder="date" required/>
         </div>
         <div>
            <label  className="form-label fw-bolder">TIME</label>
             <input onChange={handleOnChange} type="time" name="Time"
             className="form-control form-control-sm" placeholder="time" required />
         </div>
         <div>
             <label  className="form-label fw-bolder">CAPACITY</label>
             <input  onChange={handleOnChange} type="number" min={1}
             className="form-control form-control-sm" name="Capacity" placeholder="0" required/>
         </div>
       </div>
       <div className="d-grid gap-2 col-6 mx-auto p-3">
       <button className="btn btn-success text-bolder rounded-4 
    border border-danger" type="submit" > Add event</button>
       </div>
     </form>


   </div>
 );
}


export default AddEvents;