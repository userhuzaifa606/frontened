import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicModal from './Modal.jsx';
export default function BasicButtons(product) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" style={{position:'relative', bottom:'-10px', borderColor:'#7fad13'}}><BasicModal product={product}/></Button>
      <Button variant="contained" style={{position:'relative', bottom:'-10px',backgroundColor:'#7fad13'}}>Addtocart</Button>
    </Stack>
  );
}
