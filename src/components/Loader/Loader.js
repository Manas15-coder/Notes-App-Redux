import React from 'react'
import './loader.css'
function Loader() {
  return (
    <div className='container-fluid'>
        <div className='loader'>
        <div className='row'>
            <div className='col-md-12'>
            <div class="lds-ellipsis"><h2>Adding Notes</h2><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Loader
