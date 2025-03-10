import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteVideo } from '../services/AllApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addWatchHistory } from '../services/AllApi';

function VideoCard({ displayVideo, setDeleteVideoStatus }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() => {
    const today = new Date;
    const timeStamp = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(today);
    console.log(timeStamp)
    const reqBody = {
      url: displayVideo.youtubeLink,
      caption: displayVideo.caption,
      timeStamp: timeStamp
    }
    
    await addWatchHistory (reqBody) 
    setShow(true);   
  }
  const deleteVideoItem = async (id) => {
    const response = await deleteVideo(id)
    // console.log('===== delete status====');
    // console.log(response);
    if (response.status === 200) {
      setDeleteVideoStatus(true)
      toast.success('Successfully deleted the Video')
    }
    else {
      toast.error("Something went wrong")
    }

  }

  const dragStarted=(e,id)=>{
    console.log(`Video with ID:${id} is dragged`);
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
      <Card style={{ width: '18rem', height: '350px' }} className='mt-3' draggable onDragStart={(e)=>dragStarted(e,displayVideo.id)}>
        <Card.Img variant="top" src={displayVideo.imageUrl}
          height={'250px'} style={{ padding: '3px' }} onClick={handleShow} />
        <Card.Body className='bg-dark d-flex justify-content-between'>
          <Card.Title style={{ color: 'white' }}>{displayVideo.caption}</Card.Title>
          <Button variant="danger" ><i class="fa-solid fa-trash" onClick={() => deleteVideoItem(displayVideo.id)}></i></Button>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="400" src={`${displayVideo.youtubeLink}`}
            title="Arash - Broken Angel" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen>
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default VideoCard