import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import { removeNote } from './Redux/action';

export default function AllEditNotes() {

   const notes= useSelector((state) => state.notes)
   console.log(notes)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
    <div className='d-flex'>
     {
        
       notes.map((note, index) => {
         return (
           <>
           
             <div className="card" style={{width: "18rem", margin:'2rem'}}>
               <div className="card-body">
               <button className='delete-btn' title='delete' onClick={()=>{dispatch(removeNote(index))}}><i class='fa fa-trash-o'></i></button>
               <button className='update-btn' title='update' onClick={()=>{navigate('/editNote')}}><i class='fa fa-pencil-square-o'></i></button>
                 <h5 className="card-title">{note.newTitle}</h5>
                 <p className="card-text">{note.newContent}</p>
               </div>
             </div>
           </>

         )
       })
     }

   </div>
   </>
 
  )
}
