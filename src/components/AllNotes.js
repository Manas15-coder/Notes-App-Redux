import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { removeNote } from './Redux/action';
import Draggable from 'react-draggable';
import Loader from './Loader/Loader';


export default function AllNotes() {
  const [isLoading,setIsLoading]=useState(true)

useEffect(()=>{
  const timeout = setTimeout(()=>{
   setIsLoading(false)
  },2000)
  return ()=>clearTimeout(timeout)
},[])


   const notes= useSelector((state) => state.notes)
   console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
    {isLoading ? <Loader/> :(
       <div className='container-fluid'>
       <h1 className='text-center text-dark'>Drag and Drop Notes Anywhere....</h1>
       <div className='row'>
         <div className='col-md-12'>
         {
       
       notes.map((note, index) => {
         return (
           <>
             <Draggable>
            
           
               <div className='d-flex'>
               <div className="card" style={{width: "300px", height:"300px",padding:"10px 20px", margin:'2rem'}} title="Drag Me">
               <div className="card-body">
                 <div className='card-btn'>
                 <button className='delete-btn' title='delete' onClick={()=>{dispatch(removeNote(index))}}><i class='fa fa-trash-o'></i></button>
               <button className='update-btn' title='update' onClick={()=>{navigate('/editNote')}}><i class='fa fa-pencil-square-o'></i></button>
                 </div>
                 <h5 className="card-title"><h2>{note.title}</h2></h5>
                 <br/>
                 <p className="card-text"><h3>{note.content}</h3></p>
   
               </div>
             </div>
   
   
               </div>
        
           </Draggable>
          </>
   
         )
       })
     }
           
         </div>
       </div>
       
   </div>
      
    )}
   
  
   </>
 
  )
}
