import React ,{useEffect, useState}from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addNote } from './Redux/action';
export default function NotesForm() {
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('')

  
    const dispatch = useDispatch();
  
    const navigate = useNavigate();
  
    function handleSubmission(e){
      e.preventDefault();
      dispatch(addNote(title, content))
      setTitle('')
      setContent('')
      navigate('/allNotes')
    }
   
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            <form className='form'onSubmit={handleSubmission} >
                <div className="mb-3">
                    <p className='title'>What's on your Mind ?..</p><br/>
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}}
                     placeholder='Enter a Title for a Note' required/>
                </div>
                <div className="mb-3"> 
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Content
                    </label>
                    <textarea value={content} onChange={(e)=>{setContent(e.target.value)}}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder='Add Content ....' required
                    />
                </div>
                <div className='submit'>
                <button type="submit" className="btn-submit">
                    Submit
                </button>
                </div>
            </form>

        </div>
    </div>

</div>
  )
}
