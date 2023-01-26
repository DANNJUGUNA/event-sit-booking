import React from 'react'
import Card from '../components/Card'

function EventsDisplay({events}) {
 

  return (
    <>
    <h1 className='d-grid gap-2 col-8 mx-auto text-white text-center'>AVAILABLE EVENTS</h1>
    <div className='row col-12 border border-danger border-start-1 m-2 bg-secondary mb-5'>
        
        {
            events.map((event)=>{
              return(
                <Card key={event.id} event={event} />
              )
            })
        }
    

    </div>
    </>
  )
}

export default EventsDisplay