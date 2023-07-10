import { useData } from "../../contexts/DataContext"
import { ProductCard } from "../../components/ProductCard/ProductCard"
import "./ProductListing.css" 
import { FilterBar } from "../../components/FilterBar/FilterBar"


export const ProductListing = () => {
    const {productState} = useData()
    


    return(
        <div>
        <div className="filter-section" >
        <FilterBar/>
        </div> 
        <ul className="card-holder"  >
        {productState.products.map((product)=>
          <ProductCard key={product._id} {...product}  />        
        )}
        </ul>
        </div>
    
    )
}