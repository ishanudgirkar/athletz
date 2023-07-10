import { useData } from "../../contexts/DataContext";
import { useFilter } from "../../contexts/FilterContext";

export const FilterBar = () => {
  const { productState } = useData();
  const { filterState, filterDispatch } = useFilter();

  const productBrands = productState.products.reduce(
    (acc,{brand}) => (acc.includes(brand) ? [...acc] : [...acc , brand ]),[]
  )

  const productCategories = productState.products.reduce(
    (acc,{category}) => (acc.includes(category) ? [...acc] : [...acc , category]),[]
  )





  return (
    <>
      <div className="filter-holder">
        <div className="filter">
          <h2>Filters</h2>
          <button>Clear All</button>
        </div>

        <h4>Category</h4>
        <div>
          {productCategories?.map(( category , index ) => (
            <div>
              <label>
                <input type="checkbox" onChange={()=>filterDispatch({type:"CATEGORY_FILTER" , payload:category})}  />
                {category}
              </label>
            </div>
          ))}
        </div>

        <h4>Brands</h4>
        <div className="brand-filter">
            {productBrands?.map((brand,index)=>
            <label key={index} >
                <input type="checkbox" onChange={()=>filterDispatch({type:"BRAND_FILTER" , payload:brand})}    />
                {brand}
            </label>
            )}
        </div>

        <h4>Ratings</h4>
        <div className="price-filter">
          <input type="range" min="1" max="5"  list="ratings" onChange={(e)=>filterDispatch({type:"RATINGS_FILTER",payload:e.target.value})}  />
          <datalist id="ratings">
            <option value="1" label="1"></option>
            <option value="2" label="2"></option>
            <option value="3" label="3"></option>
            <option value="4" label="4" ></option>
            <option value="5" label="5" ></option>
          </datalist>
        </div>

        <h4>Sort By Price:</h4>
        <div className="price-filter">
          <label>
            <input type="radio" name="sort" /> High to Low
          </label>
          <label>
            <input type="radio" name="sort" /> Low to High
          </label>
        </div>

        <h4>Availability</h4>
        <div className="stock-filter">
          <label>
            <input type="checkbox" /> include out of stock
          </label>
        </div>
      </div>
    </>
  );
};
