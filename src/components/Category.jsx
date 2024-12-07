import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAllCategory, getAllVideosById, updateCategory } from '../services/AllApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from 'react-bootstrap';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);

  // state to store all form field values
  const [categoryName, setCategoryName] = useState()
  const [allCategory, setAllCategory] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleAddCategory = async () => {
    console.log("====== Category =====");
    console.log(categoryName);
    if (!categoryName) {
      toast.error('Please fill the form completly')
    } else {
      let body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body)
      if (response.status === 201) {
        toast.success(`Successfully Added category ${categoryName}`)
        handleClose()
        setCategoryName('')
      } else {
        toast.error("something went wrong")
      }
    }
  }

  const getCategory = async () => {
    const response = await getAllCategory();
    const { data } = response;
    setAllCategory(data);
  }

  useEffect(() => {
    getCategory();
  }, [categoryName])

  const handleDelete = async (categoryId, categoryName) => {
    const result = await deleteCategory(categoryId);
    console.log("delete respons");
    console.log(result);
    if (result.status === 200) {
      toast.success(`Successfully Deteted ${categoryName}`)
      getCategory();
    } else {
      toast.error("Something went wrong")
      handleClose()
    }
  }

  const videoDrop = async (e, id) => {
    console.log("===== on Drop =====");
    // get video id that we passed from video card
    const videoid = e.dataTransfer.getData("videoID")
    console.log(`Video with id ${videoid} need to put inside category with id ${id}`);
    const { data } = await getAllVideosById(videoid);
    console.log("===  video Details ===");
    console.log(data);
    const selectedCategory = allCategory?.find(item => item.id === id)
    selectedCategory.allVideos.push(data)
    console.log("=== selected category ===");
    console.log(selectedCategory);
    const response = await updateCategory(selectedCategory, id)
    console.log(response);
    getCategory();

  }

  const dragOver = (e) => {
    // onDragOver method will trigger page refresh, so the videoID we are passing lost
    e.preventDefault();
    console.log("====== iside dragover =======");

  }
  return (
    <>
      <button className='btn btn-danger' onClick={handleShow}>Add New Category</button>
      {
        allCategory?.length > 0 ?
          allCategory.map((item) => (
            <div className='m-3 border border-secondary rounded p-3'
              droppable onDragOver={(e) => dragOver(e)}
              onDrop={(e) => videoDrop(e, item.id)}
            >
              <div className='d-flex justify-content-between align-items-center'>
                <h6 style={{ color: 'white' }}>{item.categoryName}</h6>
                <button className='btn btn-danger' onClick={() => handleDelete(item.id, item.categoryName)}><i className="fa-solid fa-trash"></i></button>
              </div>
              {
                item.allVideos.length > 0?
                  item.allVideos?.map(Card => (
                    <VideoCard displayVideo={Card}/>
                  ))
                  : <p>Nothing To Display</p>
              }
            </div>
          )) :
          <p style={{ color: 'red' }}>Nothing To Display</p>
      }
      <Modal show={show} onHide={handleClose} data-bs-theme='dark'>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title> <span style={{ color: 'orange' }}><i class="fa-solid fa-list"></i> Add Category </span></Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark' style={{ color: 'orange' }}>
          <p style={{ color: 'orange', fontWeight: '700' }}>Please fill the form</p>
          <Form className='border rounded p-3'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark' style={{ color: 'green' }}>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce />
    </>
  )
}

export default Category