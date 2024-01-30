import React from 'react'
import {AppBar,Toolbar,Box, Typography,styled} from '@mui/material'
import Search from './Search';
const StyledHeader=styled(AppBar)`
background:#2874f0;
height:55px`;
const Component=styled(Box)`
margin-left:12%;
line-height:0;
`;
const SubHeading=styled(Typography)`
font-size:10px; 
font-style:italic`
const PlusImage=styled('img')({
  width:10,
  height:10,
  marginLeft:4

})
function Header() {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div>
      <StyledHeader>
        <Toolbar>
            <Component>
            <img src={logoURL} style={{ width: 75 }} />
            <Box>
              <SubHeading>Explore&nbsp;
                <Box component="span" style={{color:'#FFE500'}}>
                Plus
                </Box>
               <PlusImage src={subURL} alt='sub-logo'/>
                </SubHeading>
            </Box>
            </Component>
            <Search/>
        </Toolbar>
      </StyledHeader>
    </div>
  )
}

export default Header

