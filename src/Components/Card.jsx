import React from 'react'
import { Link } from 'react-router-dom'
import bag from "../assets/bag.png"
import add from "../assets/add.png"
import minus from "../assets/minus.png"
import bin from "../assets/bin.png"

import Navbar from "./Navbar"


const Card = (props) => {

    const item = props.items;

  return (


         <div>
        
       <Navbar></Navbar>
    <div className=' pt-10 px-10 h-[100vh] w-100 '> 

       <Link to="/cartt"></Link>   

          <div className='flex ' > 

       <div className=' h-[50vh] w-[60%] flex justify-center items-center  '> 

        <div className='flex flex-col' >

         <div className='flex felx-col text-white bg-black p-4 rounded-sm ' >  
             <div className='p-4'> <img src={bag} className='h-32' alt="" /> </div>
             <div>
                <p className='text-lg' > Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops </p>
                <p className='text-lg'>109.95</p>
                <div className='flex  justify-between items-center '>
                <div className='flex p-4  gap-4 ' > 
                <button className='bg-white p-1 rounded-sm' ><img src={minus} className='h-4 w-4 ' alt="" /></button>
                
                    <p className='text-xl' >2</p>

                <button className='bg-white p-1 rounded-sm'>  <img src={add} className='h-4 w-4' alt="" /> </button>
                 
               </div>
                 <div>
                    <img src={bin} className='h-6 w-6z bg-white p-1 rounded-sm' alt="" />
                </div>
                
               </div>

             </div>
                 
         </div>


        
        </div>
         
       
       </div>

       <div className=' h-[50vh] w-[40%] flex items-center justify-center  ' >

          <div className=' bg-slate-300'> 

                <div className='flex flex-col bg-black text-white h-48 w-80 p-4 gap-5 ' >
             <div className='flex justify-between' >
              <p>Total Items </p>
             <p> 1 </p></div> 
             <div className='flex' >
             <p>Total Price </p>
             <p>200 </p></div>
             <div className='flex justify-between px-4 py-2 font-serif font-bold bg-blue-500 rounded-sm ' >
                <p>100</p>
                <button>Pay</button>
              </div>
             
                </div>

          </div>

       </div>

          </div>

        </div>   

        </div>
    
        
  )
}

export default Card