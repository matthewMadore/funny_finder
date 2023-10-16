import PlaceIcon from '@mui/icons-material/Place';
import * as React from 'react';
import { Tooltip } from '@mui/material';



export default function MapIcon() {
   return ( <Tooltip title = "View Location">
   <PlaceIcon alt="Open Maps"/>
   </Tooltip>)
}