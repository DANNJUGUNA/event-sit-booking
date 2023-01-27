import {  NavLink as Link } from "react-router-dom"

const Navbar = ()=> {
    

    return(
        
                <div className=" p-4" id="nav">
      <h1 className="text-light text-center">EVENT-SEAT-BOOK</h1>
      <div className="d-flex justify-content-center mx-5">
        <Link className="btn btn-outline-light text-black" to="/">Home</Link>
        <Link className="btn btn-outline-light text-black" to="/events">EVENTS</Link>
        <Link className="btn btn-outline-light text-black" to="/addevents">ADDEVENT</Link>
      </div>
    </div>
                
                
            
      
    )
}
export default Navbar