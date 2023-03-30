import { Box, Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

const BookDetail = () => {

  const id = useParams().id;
  const URL = `http://localhost:5000/books/${id}`;
  const history = useNavigate();
  
  const [inputs, setInputs] = useState();
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const fetchData = async() => {
      await Axios.get(URL)
      .then((res) => res.data)
      .then((data) => setInputs(data.book))
      .catch((err) => console.log(err));
    }
    fetchData();
  }, [id]);
  console.log(inputs);
  console.log(checked);
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name] : e.target.value
    }));
  }

  const updateData = async() => {
    Axios.put(URL,{
      name : String(inputs.name),
      author : String(inputs.author),
      description : String(inputs.description),
      price : Number(inputs.price),
      image : String(inputs.image),
      available : Boolean(checked)
    }).then((res) => {
      console.log(res);
      toast.success('Success Update');
    })
    .then(setTimeout(() => {
        history('/books')
    }, 2000))
    .catch((err) => {
      console.log(err)
      toast.error('Somthing went wrong');
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData();
  }



  return (
    <React.Fragment>
      <Toaster position='top-center' reverseOrder={true}/>
      <div>
      {inputs && (<form onSubmit={handleSubmit}>
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
        </form>)}
      </div>
    </React.Fragment>
  )
}

export default BookDetail