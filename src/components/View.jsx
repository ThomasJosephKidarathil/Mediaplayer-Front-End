import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/AllApi'
import { Col, Row } from 'react-bootstrap'


function View({uploadVideoStatus}) {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoStatus, setDeleteVideoStatus]=useState(false)
  const getVidoes = async () => {
    const response = await getAllVideos();
    console.log('==== all videos');
    const { data } = response
    console.log(data);
    setAllVideos(data)
  }

  useEffect(() => {
    getVidoes()
    setDeleteVideoStatus(false)
  }, [uploadVideoStatus,deleteVideoStatus])
  return (
    <>
      <Row>
        {
          allVideos.length > 0 ?
            allVideos?.map((videos) => (
              <Col key={videos.id} className='ms-10'>
                <VideoCard displayVideo={videos} setDeleteVideoStatus={setDeleteVideoStatus}/>
              </Col>
            )) :
            <p style={{fontSize: '25px', fontWeight:'800px'}} className='text-warning'>Nothing to Display</p>
        }

      </Row>

    </>
  )
}

export default View