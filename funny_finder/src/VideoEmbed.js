import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Typography } from '@mui/material';

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default function VideoPlayer ({ embedId }) {
    return(
<Card  sx={{ my: 2 }} >
                <CardContent> 
            <Typography variant="h5">
          Clip of the Week
        </Typography>
			<YoutubeEmbed embedId={embedId}/>

			</CardContent>
			</Card>
            
    )
}

