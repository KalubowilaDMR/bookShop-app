import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {

  const id = useParams().id;
  const URL = `http://localhost:5000/books/${id}`;
  
  const [inputs, setInputs] = useState({
    name: '',
    author: String(''),
    description: String(''),
    price : Number(''),
    image : String('')
  });
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      await Axios.get(URL)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    }
    fetchData().then((data) => setInputs(data));
  }, [id]);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
  }

  const updateData = async() => {
    Axios.put()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }



  return (
    <React.Fragment>
      <div>
      <form onSubmit={handleSubmit}>
          <Box 
            display='flex' 
            flexDirection='column' 
            justifyContent='center' 
            maxWidth={700} 
            alignContent='center' 
            alignSelf='center' 
            margin='auto'
            marginTop={5}>
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name'/>

            <FormLabel>Author</FormLabel>
            <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'/>

            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'/>

            <FormLabel>Price</FormLabel>
            <TextField value={inputs.price} onChange={handleChange} type='number' margin='normal' fullWidth variant='outlined' name='price'/>

            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'/>

            <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />

            <Button variant='contained' type='submit' sx={{ padding:"10px" }}>Update Book</Button>
          </Box>
        </form>
      </div>
    </React.Fragment>
  )
}

export default BookDetail