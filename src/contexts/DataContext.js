import { useContext ,  useEffect , useReducer, createContext} from "react";
import { getProducts } from "../services/ProductServices";
import { ProductReducer } from "../Reducer/ProductReducer";

const DataContext = createContext()

 export const DataProvider = ({children}) => {
    const initialState = {
        products: [],
        categories:[],
        wishList: [],
        cartList: [],
        addressList: [],
      };


    const [productState , productDispatch] = useReducer(ProductReducer, initialState)

    const handleGetProducts = async() => {
        try{
            const {status, data} = await getProducts()
            if(status ===200){
              productDispatch({type:"GET_PRODUCTS" , payload:data?.products})
            }

        }catch(e){

        }
    }







    useEffect(()=>{
        handleGetProducts();
      
    },[])







    return(
       

        
        <DataContext.Provider value={{productState}}  >
            {children}
        </DataContext.Provider>
    )
 }

 export const useData = () => useContext(DataContext)