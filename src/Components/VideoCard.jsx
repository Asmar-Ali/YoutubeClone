import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/contants";
const VideoCard = ({ video }) => {
  const videoId = video.id?.videoId;
  const channelId = video.snippet?.channelId;

  return (
    <Card sx={{width : {xs : '100%', sm:"358px",  md : '320px' ,  boxShadow : 'none', borderRadius : 0}}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={video.snippet?.thumbnails?.high?.url}
          alt={video.snippet?.title}
          sx={{ width: {xs : '100%', sm:'358px', md : '320px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: 106 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
          >
            {video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={ channelId ? `/channel/${channelId}` : demoChannelUrl}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"

          >
            {video.snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircle sx={{fontSize : 12, color : 'gray', ml : '12'} }/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
