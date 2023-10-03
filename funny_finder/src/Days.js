import {Grid, Box} from '@mui/material';
import * as React from 'react';
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const numberOfDays = 30;

let rows = [];
for (let i = 0; i < numberOfDays; i++) {
    rows.push(<Grid item><Box bgcolor='primary.light' p={2}>{i}</Box></Grid>)
}

export default function Days () {
    return (
    <>
        <Grid container my={4} spacing={2} wrap="nowrap">
            {weekdays.map((w) => (
                <Grid item><Box bgcolor='primary.light' p={2}>{w}</Box></Grid>
            ))}
        </Grid>
        <Grid container my={4} spacing={2} wrap="nowrap">
            {rows}
        </Grid>
    </>
    )

}