import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import {styled,Box} from '@mui/material';
const Component = styled(Box)`
padding:10px 10px;
background:#f2f2f2;`
function Home() {
  return (
    <>
    
      <NavBar/>
      <Component>
      <Banner/>
      </Component>
     
    </>
  )
}

export default Home
