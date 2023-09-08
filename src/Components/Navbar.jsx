import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import bag from "../assets/bag.png"
import shopping from "../assets/shopping.png";
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { totalitem } from '../features/Slice';
import { Allitem } from '../features/Slice';


export default function ButtonAppBar() {


          let {cart,totalquantity} = useSelector((state)=>
          
         { return state.allitems
                     }
            
            );

            // const items = useSelector((state)=> { return state.allitems});
            // const items = useSelector((state)=> { return state.allitems});
          
        let dispatch = useDispatch();

         useEffect(()=>{
             
          dispatch(Allitem());

         },[cart])
        

   
   
  return (
 
 <div className='fixed top-0 w-full z-20'>  


{ 

  //  console.log("data",data);

       <nav className='p-4 bg-black text-white fixed top-0 w-full z-20'> 
  

  <div className='flex justify-between' >

  <div> <p className='text-xl font-serif' ><Link to="/" > Louis Vuitton  </Link></p> </div>
 
  <div>  

   <Link to="/cart">


        <div className='flex'>
         <p className='font-bold' > Cart Item({totalquantity}) </p>
    
          {/* <img src={shopping} className='h-7 w-7 mr-1'  alt=""  /> 
          */}
            </div> 

   </Link>

</div>
  </div>
 
   
       </nav>

}
 


      
    </div>


  );
}
