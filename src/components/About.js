import { Box, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <React.Fragment>
      <div>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h2' sx={{fontFamily:'fantasy'}}>This is a CRUD application</Typography>
          <Typography variant='h2'>By MERN Stack</Typography>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default About