import React from 'react'
import Card from '../components/Card'

function EventsDisplay({events}) {
 

  return (
    <>
    <h1 className='d-grid gap-2 col-8 mx-auto text-white text-center'>AVAILABLE EVENTS</h1>
    <div className='row border border-danger border-start-3 m-2 bg-secondary mb-5'>
        
        {
            events.map((event)=>{
              return(
                <Card key={event.id} event={event} seats={event.Capacity}/>
              )
            })
        }
    

    </div>
    </>
  )
}

export default EventsDisplay