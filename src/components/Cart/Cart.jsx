import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { TheContext } from '../contaxt';

export default function CartModal({  }) {
     const trycart = useContext(TheContext)
     const newarr = trycart.cartProducts
     const setarr = trycart.setCartProducts
    const [open, setOpen] = React.useState(false);
    const newstate=useContext(TheContext)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const handleremove = (id) => {
    setarr(newarr.filter(item => item.id !== id));
  };

    return (
        <div style={{}}>
            <span onClick={handleOpen} style={{fontSize:30}} >🛒</span>
            <Modal
                style={{
                    top: '35%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    height: 'auto',
                    maxHeight: '80vh', // Set a maximum height for the modal
                    overflowY: 'auto', // Enable vertical scrolling if content exceeds max height
                    maxWidth: '700px',              // Max width for larger screens
                    boxShadow: '10px 40px 70px 20px  gray',
                    minWidth: 300,
                    borderRadius: '20px',
                    p: 10,

                }}

                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box   style={{ backgroundColor: 'white' ,border: '15px solid rgb(127, 173, 19)', padding: '15px', borderRadius: '40px', boxShadow: '10px 40px 70px 20px  gray', }}>
                    <h1>Your Cart </h1>
                    {newarr.map((product, idx) => (
                   <Typography style={{display:'flex',}} id="modal-modal-title" variant="h6" component="h2">
                        <img key={idx} value={product}  src={product.image} alt={`${product.name}pic`} width={150} minWidth={100} height={130} />
                        <p style={{padding:'5px'}}>
                            {product.category} 
                            </p> 
                        <p style={{padding:'5px'}}>
                             price:{product.price}$
                             </p>
                             <button  style={{backgroundColor:'red',margin:30, height:'40px',borderRadius:'10px' }} onClick={()=>{handleremove(product.id)}}>remove</button>
                    </Typography>
                    ))}
                    <Typography>
                        <div style={{ position: 'relative', right: '10px', display: 'flex', padding: '10px', width: '250px', height: '60px' }}>
                            <button style={{ margin: '10px', padding: '8px', borderRadius: '12px', border: '5px solid rgba(127, 171, 19)', backgroundColor: 'white' }} onClick={handleClose} >
                                close
                                </button>              
                            
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
