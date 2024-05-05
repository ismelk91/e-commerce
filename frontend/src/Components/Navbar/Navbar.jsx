import React, { useContext, useRef, useState,} from 'react'
import './Navbar.css'
import shopping_bag from '../Assets/shopping_bag.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/hamburger_icon.png'
import user_icon from '../Assets/user.png'
import logout_icon from '../Assets/logout_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = () => {
      menuRef.current.classList.toggle('nav-menu-visible');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
        <Link style={{ textDecoration: 'none'}} to='/'><p>SHOPPER</p></Link>
        </div>
        <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=> {setMenu("men")}}><Link style={{ textDecoration: 'none'}} to='/men'>Men</Link>{menu==="men"}</li>
            <li onClick={()=> {setMenu("women")}}><Link style={{ textDecoration: 'none'}} to='/women'>Women</Link>{menu==="women"}</li>
            <li onClick={()=> {setMenu("kid")}}><Link style={{ textDecoration: 'none'}} to='/kid'>Kid</Link>{menu==="kid"}</li>
        </ul>

        <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
                    ? <img src={logout_icon} className='logout-icon' alt="Logout" onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }} />
                    : <Link to='/login'><img src={user_icon} className='user-icon' alt="User" /></Link>}
            <Link to='/cart'><img src={shopping_bag} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div> 
  )
}

export default Navbar