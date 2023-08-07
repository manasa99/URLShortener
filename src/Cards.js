import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
  console.log("*****",props)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.props.url}
        title={props.props.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>props.setPage(props.props.id)}>Open</Button>
      </CardActions>
    </Card>
  );
}
