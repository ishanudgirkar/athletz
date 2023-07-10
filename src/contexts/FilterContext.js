import { useContext , createContext , useReducer } from "react";
import { useData } from "./DataContext";
import { FilterReducer } from "../Reducer/FilterReducer";



const FilterContext = createContext()

export const FilterProvider = ({children}) => {
    
    const {productState} = useData()

    const initialFilterState = {
        categoryFilter:[],
        brandFilter:[]
    }

    const [filterState , filterDispatch] = useReducer(FilterReducer , initialFilterState)











    return(
        <FilterContext.Provider value={{filterState,filterDispatch}}  >
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext);
