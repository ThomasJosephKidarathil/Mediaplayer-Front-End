import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHistory } from '../services/AllApi'
import { deleteHistory } from '../services/AllApi'


function Watchhistory() {
  const [allHistory, setAllHistory] = useState([])
  const getWatchHistory = async () => {
    const { data } = await getHistory();
    setAllHistory(data)
    console.log(data);

  }

  useEffect(() => {
    getWatchHistory()
  }, [])

  const handleDelete = async (historyId) => {
    await deleteHistory(historyId)
    getWatchHistory()
  }

  return (
    <>
      <div className='container mt-5 d-flex justify-content-between mb-5'>
        <h5 style={{ color: 'green' }}>Watch History</h5>
        <Link to='/home' style={{ textDecoration: 'none', color: 'green', fontWeight: '750' }}>
          <i class="fa-solid fa-arrow-left me-2"></i>  Back to Home
        </Link>
      </div>
      <table className='table container mb-5 mt-5' data-bs-theme='dark'>
        <thead>
          <tr>
            <th style={{ color: 'red' }}>#</th>
            <th style={{ color: 'red' }}>Caption</th>
            <th style={{ color: 'red' }}>URL</th>
            <th style={{ color: 'red' }}>Time Stamp</th>
            <th style={{ color: 'red' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length > 0 ?
              allHistory.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.caption}</td>
                  <td>{item.url}</td>
                  <td>{item.timeStamp}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(item?.id)}><i class="fa-solid fa-trash"> </i></button></td>
                </tr>
              )) :
              <p style={{fontSize: '25px', fontWeight:'800px'}} className='text-warning'>Nothing to Display</p>
          }
        </tbody>

      </table>
    </>
  )
}

export default Watchhistory