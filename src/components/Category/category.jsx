import react from 'react';

const  Category=  ({send })=>{
    const navitem = ["All" , "Electronic" , "Men" , "Women" , "jewelery"] ;
    const selecting= (senddata)=>{ send(senddata)}
    return(
        
<ul style={{display:'flex' ,backgroundColor:'#ebebeb' , fontWeight:'bold' ,color:'rgb(127, 173, 19)', height:'30px', justifyContent:'space-around',alignItems:'center', listStyle:'none', margin:'0px',lineHeight:'0px', flexWrap:'wrap' }}>
          {navitem.map((value,i)=>(
         <li key={i}  style={{margin:'0px',padding:'0px' }} onClick={()=>selecting(navitem[i])}>
          <p>{value}</p>
        </li>
       ))}
    </ul>)

    
}
export default Category