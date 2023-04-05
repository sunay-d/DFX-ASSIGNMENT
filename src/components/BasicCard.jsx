import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useIsTrue from '../useIsTrue';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({user}) {

  const [detailsShown, changeDetailsShownStatus] = useIsTrue()
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {user.username}
        </Typography>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {user.company.name}
        </Typography>
      {
        detailsShown && 
        <>
          <Typography variant="body2">
            {`Website: ${user.website}`}
          </Typography>
          <Typography variant="body2">
            {`Email: ${user.email}`}
          </Typography>
          <Typography variant="body2">
            {`Phone: ${user.phone}`}
          </Typography>
        </>
      }
      </CardContent>
      <CardActions>
        <Button size="small" onClick={changeDetailsShownStatus}>Contact Info</Button>
      </CardActions>
    </Card>
  );
}