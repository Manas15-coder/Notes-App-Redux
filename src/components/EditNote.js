import React ,{useEffect, useState}from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateNote} from './Redux/action';

export default function EditNote() {
    let [newTitle, setNewTitle] = useState('');
    let [newContent, setNewContent] = useState('')

  
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
  
    function handleEdit(e){
      e.preventDefault();
      dispatch(updateNote(newTitle, newContent))
      setNewTitle('')
      setNewContent('')
      navigate('/allEditNotes')
    }
   
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            <form className='form'onSubmit={handleEdit} >
                <div className="mb-3">
                    <p className='title'>What's on your Mind ?..</p><br/>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control" value={newTitle} onChange={(e)=>{setNewTitle(e.target.value)}}
                     placeholder='Enter a Title for a Note'/>
                </div>
                <div className="mb-3"> 
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Content
                    </label>
                    <textarea value={newContent} onChange={(e)=>{setNewContent(e.target.value)}}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Add Content ....'
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Submit
                </button>
                
            </form>

        </div>
    </div>

</div>
  )
}
