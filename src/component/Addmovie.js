import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
const Addmovie = ({Add}) => {


  const [show, setShow] =useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 const [title,setTitle] =useState("")
 const [description,setDescription] =useState("")
 const [rate,setRate] =useState("")
 const [posterUrl,setPosterurl] =useState("")
  
 const handletitle=(e)=>{
  setTitle(e.target.value)
 }
 const handledescription=(e)=> {
  setDescription(e.target.value)
 }
 const handlerate=(e)=> {
  setRate(e.target.value)}
 
 const handleposterUrl=(e)=> {
  setPosterurl (e.target.value)
 }
 const handleAdd = () => {

  let  
  Newmovie = {
    title , description , rate , posterUrl
  }

  Add (Newmovie)
handleClose ()
 }
 
 return (

    <div className=''>
      
      
       <Button className='Button' variant="primary" onClick={handleShow}>
    Add Movie
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Add Movie</Modal.Title>
    </Modal.Header>
    <Modal.Body> 
    <Form.Control type="text" placeholder="title" onChange={(e) => handletitle(e)} />
    <Form.Control type="number" placeholder="rate" onChange={(e)=> handlerate(e)} />
    <Form.Control type="text" placeholder="description" onChange={ (e) => handledescription(e)} />
    <Form.Control type="url" placeholder="posterUrl" onChange={ (e) => handleposterUrl(e)} />

      </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleAdd}>
       Add Movie
      </Button>
    </Modal.Footer>
  </Modal>
  </div>
  )
}

export default Addmovie