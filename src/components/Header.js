import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [value, setValue] = useState();

  console.log(value);

  return (
    <React.Fragment>
        <AppBar sx={{ backgroundColor:"#232F3D" }} position='sticky'>
          <Toolbar>
            <Typography>
              <LibraryBooksOutlinedIcon/>
            </Typography>
            <Tabs 
              sx={{ ml:'auto' }}
              indicatorColor='primary' 
              textColor='inherit' 
              value={value} 
              onChange={(e, val) => setValue(val)}>
              <Tab LinkComponent={NavLink} to="/add" label='Add product'/>
              <Tab LinkComponent={NavLink} to="/books" label='Books'/>
              <Tab LinkComponent={NavLink} to="/about" label='About Us'/>
            </Tabs>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header