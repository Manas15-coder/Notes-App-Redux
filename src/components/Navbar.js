import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='nav'>
        <h2>Notes</h2>
        <div className='nav-btn'>
            <Link to='/'><button className='btn' title='Home'><i className='fa fa-home'></i></button></Link>
            <Link to='/allNotes'><button className='btn' title='All Notes'><i className='fa fa-sticky-note'></i></button></Link>
        </div>
    </div>
    </div>
  
</div>
  )
}
