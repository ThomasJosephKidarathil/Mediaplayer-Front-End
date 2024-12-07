import React, { useState } from 'react'
import Add from '../components/Add'
import View from '../components/View'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

function Home() {
  const [uploadVideoStatus, setUploadVideoStatus]=useState({})
  return (
    <>
      <div className='container mt-5 d-flex justify-content-between align-items-center'>
        <div className='add_video' style={{ color: 'green', fontSize: '20px' }}>
          <Add setUploadVideoStatus={setUploadVideoStatus}/>
          {/* we can use any veriable name for passing value  */}
        </div>
        <Link to='/watch' style={{ textDecoration: 'none', color: 'green', fontSize: '20px' }}>Watch History</Link>
      </div>
      <div className='container mt-3 mb-3 d-flex justify-content-between'>
        <div className='col-md-9 mt-2' style={{color:'green'}}>
          <h4 style={{ color: 'green', fontSize: '25px' }} className='mb-2'>All Videos</h4>
          <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className='category col-md-2' style={{color:'green'}}>
          <Category/>
        </div>
      </div>
    </>
  )
}

export default Home