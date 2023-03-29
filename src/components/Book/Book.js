import React from 'react'
import { Button } from '@mui/material';
import './Book.css'
import { Link } from 'react-router-dom';

const Book = ({_id, name, author, description, price, image, available}) => {

  // const {_id, name, author, description, price, image, available} = props.book;

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h5>Rs {price}</h5>
      <Button sx={{ fontWeight:700, ":hover":{backgroundColor:"#FC2947", color:"#FFFFFF", fontWeight:500} }} LinkComponent={Link} to={`/books/${_id}`}>Update</Button>
      <Button sx={{ fontWeight:700, ":hover":{backgroundColor:"#2F58CD", color:"#FFFFFF", fontWeight:500} }}>Delete</Button>
    </div>
  )
}

export default Book