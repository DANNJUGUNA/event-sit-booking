import React,{ useState} from 'react'

function EventBookForm() {
    const[formData,setFormData]=useState({
            Name:"",
            Email:"",
            SitNumber:0,
            EventName:""
    })
   const handleSubmit=(event)=>{
    event.preventDefault();
    postData(formData)
   }
    const postData=(data)=>{
    fetch("http://localhost:3000/bookings",{
        method:"POST",
        headers: {
            "Content-Type": "application/json", 
            "Accept": "application/json",
         },
         body:JSON.stringify(data)
    })
    .then((response)=>response.json())
    .then(data=>console.log(data))
    }
    const handleOnChange = (event)=> {
      const fieldName=event.target.name;
      const fieldValue= event.target.value
      const newFormData={...formData};
      newFormData[fieldName]=fieldValue;
      setFormData(newFormData);
    }
  return (
    <> 
    <h3 className='d-grid gap-2 col-8 mx-auto text-center'>BOOK YOUR PREFERED SITTING POSITION</h3>
    <form className='container col-6 p-2 bg-secondary text-white text-bold rounded-4 
    border border-danger'onSubmit={handleSubmit} >
    <div >
    <label  className="form-label fw-bolder">NAME</label>
    <input type="text"  name="Name"onChange={handleOnChange}  
    className="form-control form-control-sm" placeholder='name' required/>
  </div>
  <div >
    <label  className="form-label fw-bolder">Email address</label>
    <input type="email" name="Email" className="form-control" onChange={handleOnChange} 
     aria-describedby="emailHelp" placeholder='email@gmail.com' required/>
  </div>
 <div>
    <label className='form-label fw-bolder'> SIT NUMBER</label>
    <input type="number" name=" SitNumber"  
    onChange={handleOnChange} className="form-control form-control-sm" min={1} placeholder='00' required/>
 </div>
  <div >
    <label  className="form-label fw-bolder">EVENT-NAME</label>
    <input type="text" name='EventName'  
    onChange={handleOnChange} className="form-control" placeholder='event-name' required/>
  </div>
   <div className="d-grid gap-2 col-6 mx-auto p-3">
  <button type="submit" className="btn btn-success text-bolder rounded-4 
    border border-danger" >Submit</button>
  </div>
  </form>
  </>
  )
}

export default EventBookForm