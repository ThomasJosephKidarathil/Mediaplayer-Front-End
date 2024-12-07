import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({ setUploadVideoStatus }) {
  const [show, setShow] = useState(false);

  // state to store all form field values
  const [videoDetails, setVideoDetails] = useState({
    caption: '',
    imageUrl: '',
    youtubeLink: ''
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addVideoDetails = async () => {
    const { caption, youtubeLink } = videoDetails
    if (!caption || !youtubeLink) {
      toast.warning('Please fill the form completely')
    }
    else {
      // console.log('==== final data =====');
      console.log(videoDetails);
      const response = await uploadVideo(videoDetails);
      // console.log(response);
      if (response.status === 201) {
        setUploadVideoStatus(response.data)
        toast.success(`${response.data.caption} Successfully Uploaded`);
        handleClose()
        setVideoDetails({
          caption: '',
          youtubeLink: ''
        })
      }
      else {
        toast.error("Something went wrong")
      }
    }
  }

  const getEmbededLink = (data) => {
    // console.log('=== inside getembeded method ====');
    const link = `https://www.youtube.com/embed/${data.slice(-11)}`
    // console.log(link);
    let image_Url = `https://img.youtube.com/vi/${data.slice(-11)}/hqdefault.jpg`
    setVideoDetails({ ...videoDetails, youtubeLink: link, imageUrl: image_Url })
  }

  return (
    <>
      <div className='d-flex align-items-center'>
        <h5 style={{ color: 'green' }} className='me-3'>Upload New Video</h5>
        <button className='btn' style={{ color: 'green' }} onClick={handleShow}><i class="fa-solid fa-cloud-arrow-up fa-2x"></i></button>
      </div>
      <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title> <span style={{ color: 'green' }}><i class="fa-solid fa-video"></i> Upload Video </span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark' style={{ color: 'green' }}>
          <p style={{ color: 'green', fontWeight: '700' }}>Please fill the form</p>
          <Form className='border rounded p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Caption"
                onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Youtube Video Link"
                onChange={(e) => getEmbededLink(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark' style={{ color: 'green' }}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={addVideoDetails}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        draggable
        transition:Bounce />
    </>
  )
}

export default Add