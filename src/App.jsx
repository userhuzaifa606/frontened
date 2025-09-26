import { useEffect, useState } from 'react'
import axios from 'axios'
import PrimarySearchAppBar from './components/Navbar.jsx'
import MuiCard from './components/Card/MuiCard'
import '../src/index.css';
import Category from './components/Category/category.jsx';
import { TheContext } from './components/contaxt.js';
function App() {
    const [cat, setCat] = useState();
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState(null);
    const [cartProducts, setCartProducts] = useState([]);
    const datafromchild = (data) => {
        // setMessage(data);
        setCat(data);
        console.log(cat);
    };
    const viewDetails = (product) => {
        setDetail(product);
        setOpen(true);
    };
    const gotcartdata = (pro) => {
        const newarr = [...cartProducts]
        newarr.push(pro)
        setCartProducts(newarr)
        
    }
    useEffect(() => {
        if (cat == null || cat == "All") {
            axios.get("https://fakestoreapi.com/products/")
                .then((res) => setProducts(res.data))
                .catch((error) => console.log(error));
        }
        else if (cat == "Electronic") {
            axios.get("https://fakestoreapi.com/products/category/electronics")
                .then((res) => setProducts(res.data))
                .catch((error) => console.log(error));
        }
        else if (cat == "Men") {
            axios.get("https://fakestoreapi.com/products/category/men's clothing")
                .then((res) => setProducts(res.data))
                .catch((error) => console.log(error));
        }
        else if (cat == "Women") {
            axios.get("https://fakestoreapi.com/products/category/women's clothing")
                .then((res) => setProducts(res.data))
                .catch((error) => console.log(error));
        }
        else if (cat == "jewelery") {
            axios.get("https://fakestoreapi.com/products/category/jewelery")
                .then((res) => setProducts(res.data))
                .catch((error) => console.log(error));
        }
    }, [datafromchild]);

    return (
        <TheContext.Provider  value={{cartProducts, setCartProducts}}>
            <div style={{ margin: 0, padding: 0 }}>
                <PrimarySearchAppBar />
                <Category send={datafromchild} />

                <div className='sm:m-100px' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: '10px 0px' }}>
                    {products.map((val, idx) => (
                        <MuiCard viewDetails={viewDetails} getcartdata={gotcartdata} product={val} key={idx} />
                    ))}
                </div>
            </div>
        </TheContext.Provider>
    );
}

export default App;