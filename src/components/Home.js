import { Box, Button, Typography } from '@mui/material'
import Axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import './Book/Book.css';

const Home = () => {

  const [books, setBooks] = useState()
  
  const URL = 'http://localhost:5000/books/';

  const fetchData = async() => {
    return await Axios.get(URL).then(res => res.data).catch(err => console.log(err));
  }  

  const handleFetchData = () => {
    fetchData().then(data => setBooks(data.books)); 
  }
  
  return (
    <React.Fragment>
        <div>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Button variant='contained' sx={{ marginTop: 5, background:'#FC2947', ':hover':{background:'#2F58CD'} }} onClick={handleFetchData}>
              <Typography variant='h5'>View all Products</Typography>
            </Button>
          </Box>
        </div>
        <ul style={{ marginTop:'20px' }}>
          {books && books.map((book, key) => (
            <li className='book' key={book._id}>
              <div className='card'>
                <img src={book.image} alt={book.name} />
                <article>By {book.author}</article>
                <h3>{book.name}</h3>
                <p>{book.description}</p>
                <h5>Rs {book.price}</h5>
                <Button sx={{ fontWeight:700, marginTop:'5px', ":hover":{backgroundColor:"#0E8388", color:"#FFFFFF", fontWeight:500} }} LinkComponent={Link} to={`/books`}><OpenInNewIcon sx={{ fontSize:'18px', marginRight:'7px' }}/> Manage</Button>
              </div>
            </li>
          ))}
        </ul>
    </React.Fragment>
  )
}

export default Home