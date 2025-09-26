import * as React from 'react';
import BasicModal from '../Modal'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
export default function MuiCard({ product, viewDetails ,getcartdata}) {
  const handleCart = (pro) => {
  getcartdata(pro)
   } 
  return (
    <Card sx={{ width: { xs: 160, sm: 200 },margin:1, height:'auto' }}>
      <CardMedia  
        component="img"
        sx ={{height:{sm:'130px', xs:'60px'}, width:{sm:100 , xs:80}}}
        image={product.image}
        alt={product.title}
        style={{ objectFit: 'contain', padding: '10px' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          <span style={{fontSize:'13px' , fontWeight:'bolder'}}>{product.title }</span>
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <span  style={{fontSize:'11px', fontWeight:'bolder'}} > {product.category}</span>
        </Typography>
        <Typography variant="subtitle1" color="text.primary" >
          <span style={{fontSize:'13px', fontWeight:'bolder'}} > ${product.price}</span>
        </Typography>
        
        <Typography variant="subtitle1" color="text.primary" mt={1}>
          
        <modal/>
        
        </Typography>
        
          <BasicModal product={product}/>
          <button style={{margin:'8px', padding:'10px', borderRadius:'10px', backgroundColor:' rgb(127, 173, 19)'}} onClick={()=>{handleCart(product); alert('your cart succesfully added check your cart')}} >
              Add to Cart
              </button>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}
