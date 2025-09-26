import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Height, Padding } from '@mui/icons-material';
import { colors } from '@mui/material';
import {TheContext} from './contaxt.js'
import { useContext,useState } from 'react';

export default function BasicModal({product}) {
 
  const [open, setOpen] = React.useState(false);
  const [newstate, setNewstate] = useState([])
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

  return (
    <div style={{}}>
      <Button  onClick={handleOpen}>viewDetails</Button>
      <Modal
      style={{  

  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',      
  height:'199px',  
  maxWidth:'700px',              // Max width for larger screens
  boxShadow:'10px 40px 70px 20px  gray',
  minWidth:300,
  borderRadius:'20px',
  p: 10,
          }}
      
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <TheContext.Provider value={{newstate}}>
        <Box  style={{ backgroundColor:'white',border:'15px solid rgb(127, 173, 19)',padding:'15px',borderRadius:'40px',boxShadow:'10px 40px 70px 20px  gray'  ,}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img  src={product.image} alt={`${product.name}pic`}   width={170} minWidth={100} height={200} />
            </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {`${product.price}$`}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" style={{color:'gray'}} component="h2">
            {product.category}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{}} >
            <h2>{product.title}</h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{}} >
            <p style={{color:'gray'}}>{product.description}</p>
          </Typography>
          <Typography>
          <div style={{position:'relative', right:'10px',display:'flex',  padding:'10px', width:'250px', height:'60px'}}>  
         <button style={{margin:'10px', padding:'8px', borderRadius:'15px', border:'5px solid rgb(127, 173, 19)', backgroundColor:'white'}} onClick={handleClose} >
          close
          </button>
         
          </div>
          </Typography>
        </Box>
        </TheContext.Provider>
      </Modal>
    </div>
  );
}
