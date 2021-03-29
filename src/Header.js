import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import logo from './images/rocket-ship-logo.jpg'
import { ShoppingBasketOutlined, ShoppingBasketRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
{/* Header is the upper layer of the site which has the logo 
 search bar and the cart features - made by you not the tutor 
dipshit*/}
function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
    return (
    <div className='header'>
        <Link to="/">
            <img className="header_logo"
                src={logo} alt='Logo'
            />
        </Link>
        <div className='header_search'>
            <input className='header_searchInput'
                   type='text'/>
            <SearchIcon
                className='header_searchIcon'
            />

        </div>

        <div className='header_nav'>    
            <Link to={!user && '/login'}>
                <div onClick={handleAuthenticaton} className="header_option">
                    <span className="header_optionLineOne">
                        Hello {!user ? 'Guest' : user.email}
                    </span>
                    <span className="header_optionLineTwo">
                        {user ? 'Sign Out' : 'Sign In'}
                    </span>
                </div>
            </Link>
            <Link to= {'/orders'}>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                    Returns
                </span>
                <span className='header_optionLineTwo'>
                    Orders
                </span>
            </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionLineOne'>
                   Your
                </span>
                <span className='header_optionLineTwo'>
                    Premium
                </span>
            </div>
            <Link to='/checkout'>
            <div className="header_optionBasket">
                <ShoppingBasketRounded />
                    <span 
                        className="header_optionLineTwo header_basketCount">
                        {basket?.length}
                    </span>
            </div>
            </Link>
        </div>
    </div>
    )
}

export default Header
