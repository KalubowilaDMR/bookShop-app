import React from 'react'
import { Button } from '@mui/material';
import './Book.css'
import { Link, useNavigate } from 'react-router-dom';
// import Axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

const Book = ({_id, name, author, description, price, image, available}) => {

  // const {_id, name, author, description, price, image, available} = props.book;

  const history = useNavigate();

  const handleDelete = async() => {
    await axios
    .delete(`http://localhost:5000/books/${_id}`)
    .then((res) => res.data)
    .then(toast.success('Delete Success!'))
    .then(toast('Please refresh the page get better experience!',{
      icon : '⚠️',
      duration : 4000
    }))
    .catch((err) => toast.error('Somthing went wrong!'));
    
  }

  return (
    <React.Fragment>
      <Toaster position='top-center' reverseOrder={true}/>
      <div className='card'>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h5>Rs {price}</h5>
        <Button sx={{ fontWeight:700, ":hover":{backgroundColor:"#FC2947", color:"#FFFFFF", fontWeight:500} }} LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
        <Button sx={{ fontWeight:700, ":hover":{backgroundColor:"#2F58CD", color:"#FFFFFF", fontWeight:500} }} onClick={handleDelete}>Delete</Button>
      </div>
    </React.Fragment>
  )
}

export default Book