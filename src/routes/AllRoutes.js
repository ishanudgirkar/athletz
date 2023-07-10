import {Route,Routes} from "react-router";
import { Home } from "../pages/Home/Home";
import { ProductListing } from "../pages/ProductListing/ProductListing";
import { ProductDetail } from "../pages/ProductDetail/ProductDetail";


export const AllRoutes = () => {
   return(
    <Routes>
        <Route path="/" element ={<Home/>}  />
        <Route path="/products" element={<ProductListing/>}   />
        <Route path="/product/:productID" element={<ProductDetail/>}  /> 
    </Routes>  
   )
}