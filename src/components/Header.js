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
            <NavLink to='/' style={{ color:'white' }}>
              <Typography>
                <LibraryBooksOutlinedIcon/>
              </Typography>
            </NavLink>
            <Tabs 
              sx={{ ml:'auto' }}
              indicatorColor='primary' 
              textColor='inherit' 
              value={value} 
              onChange={(e, val) => setValue(val)}>
              <Tab sx={{fontSize : {xs:'12px', sm:'12px', md:'14px', lg:'16px'}}} LinkComponent={NavLink} to="/add" label='Add product'/>
              <Tab sx={{fontSize : {xs:'12px', sm:'12px', md:'14px', lg:'16px'}}} LinkComponent={NavLink} to="/books" label='Books'/>
              <Tab sx={{fontSize : {xs:'12px', sm:'12px', md:'14px', lg:'16px'}}} LinkComponent={NavLink} to="/about" label='About Us'/>
            </Tabs>
          </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Header