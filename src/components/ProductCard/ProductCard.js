import "./ProductCard.css";

export const ProductCard = (product) => {

    const {_id ,  title , image1, image2 , brand , price , originalPrice ,  category , ratings ,outOfStock } = product



    return(
        <li className="card" >
        <img src={image1} />
        <p>{title}</p>
        <p>{brand}</p>
        <p>{price}</p>
        <p>{ratings}</p>
        <button>Add to cart</button>
        <button>Add to wishList</button>
        </li>
    )
}