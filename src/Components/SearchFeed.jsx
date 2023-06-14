import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';

import Videos from './Videos'
import { fetchFromApi } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() =>{
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((result)=>{
      setVideos(result.items)
    })

  },[searchTerm]);


  return (
    <Box p={2} sx={{overflowY : 'auto' , height : '90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color : '#fff'}}>
          Search Results For <span style={{color : '#FC1503'}}>{searchTerm}</span> Videos
        </Typography>
        <Box sx={{display  :'flex'}}>
        <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos}/>

        </Box>
      </Box>
  )
}

export default SearchFeed