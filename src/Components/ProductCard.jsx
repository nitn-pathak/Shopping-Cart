import * as React from 'react';
// import Card from '@mui/material/Card';
import Card from './Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import bag from "../assets/bag.png"
import { useSelector,useDispatch } from 'react-redux';
import { addtocart } from '../features/Slice';
import Data from "../ProductData.js";
import { Link } from 'react-router-dom' 
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeContext } from '@emotion/react';
import { light } from '@mui/material/styles/createPalette';

// import bags from "../assets/bag.jpg";

// export default function ProductCard(){
//   const Notify =()=>{         
//     toast("Item Added",{
//      position:toast.POSITION.BOTTOM_CENTER,
//        theme:"dark"
//           });  
//        }


export default function ProductCard(){
  const Notify =()=>{         
    toast("Item Added",{
     position:toast.POSITION.BOTTOM_CENTER,
       theme:"dark"
          });  
       }




  const items = useSelector((state)=> { return state.allitems});
 
 
  let dispatch = useDispatch();
 
   
  return (

      
      <div className='  grid lg:grid-cols-3 grid-cols-1  flex-wrap pt-20 px-8'>
         
        {items.item.map((item,index)=>

   <div className='flex justify-center' key={index}  >


    <div className=' bg-black  overflow-x-hidden overflow-y-hidden mt-5 h-80 w-72  text-white p-4 rounded-sm  '  >


    <div className='flex flex-col gap-3' >

         <div  className=' flex justify-center'> <img src={item.image} className='h-36 w-32' alt=""/> </div>
       
         <div className='flex' >  
              <p className='text-sm' > {item.title} </p>
                               
         </div>
         <div>
         <p> {item.price}</p>
         </div>  
         </div>
         
          <div 
          className=' relative flex justify-center items-end  top-1 '> 
          <button className=' bg-white text-black font-serif p-2 rounded-sm  hover:bg-blue-500  hover:text-white ' onClick={()=> {dispatch(addtocart(item));Notify();}}  > Add To Cart 
             <ToastContainer/>
           </button>

          </div>            

    </div>

     </div>                
             )}
      
      </div>
      
  );
}
