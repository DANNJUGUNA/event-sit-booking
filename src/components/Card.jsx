import React from 'react'
import { Link } from 'react-router-dom';

function Card({event,seats}) {
  let arr=[];
  let i;
  function seatsdisplay(){       
    for( i=0;i<=seats-1;i++){
      arr.push(i+1)
      
    }
    return arr
}

seatsdisplay()
  return (
    <div className="card col-3 p-0 m-2 rounded-5 border border-danger mb-7" >
    <div className="card-body">
      <h5 className="card-title">{event.EventName}</h5>
      <p className="card-text">Date : {event.Date}</p>
      <p className="card-text">Time : {event.Time}</p>
      <p className="card-text">Capacity : {event.Capacity}</p>
      <p className="card-text">Location : {event.Location}</p>
      
      
      <Link  to ='/EventBookForm'class="btn btn-success rounded-10 border border-danger d-grid gap-2 col-6 mx-auto p-1" onClick={()=>event (event.id)}>BOOK</Link>
    </div>
  </div>
  )
}

export default Card