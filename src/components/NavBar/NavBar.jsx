import {NavLink} from 'react-router-dom'
import "./NavBar.css"

export const NavBar = () => {
    return(
  <div>
    <nav className="nav-holder" >
        <NavLink to="/">Home</NavLink>
        <NavLink >MEN</NavLink>
        <NavLink>WOMEN</NavLink>
        <NavLink>KIDS</NavLink>
        <NavLink to="/products" >Shop Now!</NavLink>
        <div>
            <input type="text" placeholder="Search"/>
        </div>
        <NavLink>cart</NavLink>
        <NavLink>wishlist</NavLink>
        <NavLink>
            <button>Login</button>
        </NavLink>
    </nav>
  </div>
    )
}