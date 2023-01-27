import Navbar from "./components/Navbar";
import EventsDisplay from "./pages/EventsDisplay";
import React,{useState,useEffect} from "react";
import { Routes,Route } from "react-router-dom";
import EventBookForm from "./components/EventBookForm";
import AddEvents from "./pages/AddEvents";
function App() {
  const[events,setEvents]=useState([]);

useEffect(()=>{
      fetch("http://localhost:8000/events?_sort=Date")
     .then((response)=>response.json())
     .then((data)=>setEvents(data))
},[])
const handleRerender=(event)=>{
  setEvents([...events,event])
}
  return (
    <div >
     <Navbar/>
     <Routes>
     
     <Route path='/events' element={<EventsDisplay events={events}/>}/>
     <Route path='/events/:eventid' element={<EventBookForm events={events}/>}/>
     <Route path='/addevents' element={<AddEvents addevent={handleRerender}/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
