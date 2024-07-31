import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function FoodCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: 'cover', objectPosition: 'center' }}
        image="/Brisket.webp"
        title="brisket"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Brisket
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Choose between whole brisket (8 pounds) or half (4 pounds)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Order Now</Button>
      </CardActions>
    </Card>
  );
}