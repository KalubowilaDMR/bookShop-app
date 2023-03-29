import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {

  const historyAdded = useNavigate();

  const [inputs, setInputs] = useState({
    name : '',
    author : '',
    description : '',
    price : '',
    image : '',
    available : false
  });

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
  }

  const sendData = async() => {
    Axios.post('http://localhost:5000/books',{
      name : String(inputs.name),
      author : String(inputs.author),
      description : String(inputs.description),
      price : Number(inputs.price),
      image : String(inputs.image),
      available : Boolean(checked)
    })
    .then((res) => console.log(res.data))
    .catch((err) => {console.log(err)});
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // sendData();
    sendData().then(historyAdded('/books'));
    // console.log(inputs, checked);
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

            <Button variant='contained' type='submit' sx={{ padding:"10px" }}>Add Book</Button>
          </Box>
        </form>
      </div>
    </React.Fragment>
  )
}

export default AddBook