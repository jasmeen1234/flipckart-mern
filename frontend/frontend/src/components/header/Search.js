import React from 'react'
import{InputBase,Box,styled} from '@mui/material';
const SearchContainer=styled(Box)`
background:#fff;
`;
const InputSearchBase=styled(InputBase)`
`;
function Search() {
  return (
    <SearchContainer>
        <InputBase/>
        </SearchContainer>
  )
}

export default Search
