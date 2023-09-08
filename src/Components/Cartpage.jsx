import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import arrow from "../assets/arrow.png"
import rightarrow from "../assets/rightarrow.png"
import {Link} from "react-router-dom"
import bin from "../assets/bin.png"
import add from "../assets/add.png"
import minus from "../assets/minus.png"
import { Allitem,removeitem,increaseItem,decreaseItem} from '../features/Slice';
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react'
import { dark } from '@mui/material/styles/createPalette'

 const Cartpage = () => {

        const {cart,totalquantity,totalprice} = useSelector(
         (state)=> state.allitems
          );

           let [data,setdata] = useState(true); 


            
           useEffect(()=>{

            updatepage();

            console.log("inside useEffect");
             },[cart]);
             
        
             function updatepage(){
            if(totalquantity>0){
               setdata(false);
               console.log("totalquantity",totalquantity);               
                 }else{
                  setdata(false);
               console.log("totalquantity",totalquantity);  
                 }
               }

                
            const dispatch = useDispatch();              
     
            useEffect(()=>{

                  dispatch(Allitem());              

                },[totalquantity]);
              

                  const Notify =()=>{         
                    toast("Item Removed",{
                     position:toast.POSITION.BOTTOM_CENTER,
                       theme:"dark"
                          });  
                       }
                

               

                 
              
  return (

//      <div>

//           <Navbar totalquantity={totalquantity} />
//          <div className='flex justify-around py-11 mt-9' >
      
//             <div className='flex flex-col gap-3' >

                 

//            {cart.map((data,index)=>(

             
//               // data.price.reduce((total,price)=> (return total+price|));

//        <div className= '' key={index} >
//   <div className='flex flex-col p-4 ' >             
//   {/* left */}
//   <div className=' p-5  bg-slate-200 rounded-sm'>


//    {/* left */}
//   <div className='flex' > 
//    <img src={data.image} className='h-36 mr-3' alt="" />
 
//    <div className='flex flex-col justify-center items-start gap-4' >
//      <h1 className='text-xl'> {data.title}</h1>
//      <p className='text-lg'> {data.category} </p>
 
//         <div className='flex '> 
//      <div className='flex  justify-center items-center gap-4 ml-4'> 
//   <h1 className='text-base'> </h1> 
//    <p className='text-base'> ${data.price} </p>
//   </div>

//   <div className='flex justify-center items-center gap-4 ml-7 '> 
//   <img src={minus}  onClick={()=>dispatch(decreaseItem(data.id))}  className='h-3' alt="" />
//    <h1 className='text-lg'>   { data.quantity }  </h1> 
//   <img src={add} onClick={()=>dispatch(increaseItem(data.id))}  className='h-3' alt="" />
//   <img src={bin} className='h-4 ml-60 ' alt="" onClick={()=> dispatch(removeitem(data.id)) } />
//   </div>

//    </div>


//   </div>
//   </div>

      
//   </div>


//   </div>
//       </div>

     
//              )) }

//              </div>





//  <div className='mt-4' >
//  {/* right */}
//  <div className=' bg-slate-200 p-10 rounded-sm '> 
  
//  <div className='gap-20'> 
//       <div className='flex gap-6' > <p className=''>Total Item</p> 

//        <h1 className='ml-14'>{totalquantity}</h1></div>   
//     </div>

//     <div className='gap-20'> 
//       <div className='flex' > <p className=''>Total Amount</p> 
//        <h1 className='ml-14'>${totalprice}</h1></div>   
//     </div>

//     <div className='flex gap-20 p-2 bg-black rounded-sm'> 
//        <h1 className='text-white'>Checkout</h1>
//      <div className='flex justify-center items-center  ' >     
//       <p className='text-white' >${totalprice} </p> 
//        </div>
 
//     </div>
//  </div>

//  </div>
          
         
 
    

//          </div>

//      </div>
  

 <div>

    <Navbar></Navbar>

    {/* {console.log(data)} */}

 {
   
  data?<div  className='bg-black h-[100vh] text-white flex  justify-center items-center font-bold text-2xl'>  No item Selected  </div>: <div className=' pt-10 px-10 h-[100vh] w-100 flex flex-col justify-between  lg:flex-row '> 



<Link to="/cart"></Link>   
<div className='flex flex-col py-10  mr-0 lg:mr-48 ' >
{cart.map((data,index)=>(

   <div className='flex flex-col' key={index}   > 

        {/* left */}
        
<div className=' flex flex-col justify-center items-center mt-1 bg-black '> 

   <div className='flex flex-col justify-center items-center text-white my-6 p-2 rounded-sm w-60  lg:flex-row  lg:w-[100%]  ' >  
      <div className='p-4'> <img src={data.image} className='h-32 w-28' alt="" /> </div>
      <div>
         <p className='text-lg' > {data.title} </p>
         <p className='text-lg'>{data.price}</p>
         <div className='flex  justify-between items-center '>
         <div className='flex p-4  gap-4 ' > 
         <button className='bg-white p-1 rounded-sm' > <img src={minus} onClick={()=>dispatch(decreaseItem(data.id))} className='h-4 w-4 ' alt="" /></button>
         
             <p className='text-xl' >{data.quantity}</p>

         <button className='bg-white p-1 rounded-sm'>  <img src={add} onClick={()=>dispatch(increaseItem(data.id))}  className='h-4 w-4' alt="" /> </button>
          
        </div>
          <div>
             <img src={bin} onClick={()=> {dispatch(removeitem(data.id));Notify();updatepage(); } } className='h-6 w-6z bg-white p-1 rounded-sm' alt=""  />
              <ToastContainer/>
         </div>
         
        </div>

      </div>
 
  </div>
  
</div>

   </div>
 
 ))}

</div>
 {/* right */}
  <div className=' h-[50vh]  flex items-center justify-center   ' >


      <div className='flex flex-col  bg-black text-white h-48 w-80 p-4 gap-5 lg: ' >
   <div className='flex justify-between' >
    <p>Total Items </p>
   <p> {totalquantity} </p></div> 
   <div className='flex justify-between' >
   <p>Total Price </p>
   <p>{totalprice} </p></div>
   <div className='flex justify-between px-4 py-2 font-serif font-bold bg-blue-500 rounded-sm ' >
      <p>{totalprice}</p>
      <button>Pay</button>
    </div>
   
      </div>

</div>
 </div>     
 }
 </div>




         )
        
   

}

export default Cartpage