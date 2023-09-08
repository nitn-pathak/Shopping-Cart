import { configureStore } from "@reduxjs/toolkit";

import Cartreducer from "../features/Slice"

export const store = configureStore({

reducer:{ 

    allitems : Cartreducer

 }

})