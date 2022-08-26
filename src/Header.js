import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
function Header() {
     const[{basket}, dispatch] = useStateValue();



  return (
    <div className='header'>
       
                        <Link to="/">
                        <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='logo'/>
                        </Link>

        <div className='header__search'>
            <input className='header__searchInput' type="text"></input>
            <SearchIcon className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
        <Link to='/login'>
            <div className='header__option'>
                <span className='header__optionLineOne' style={{textDecoration:'none'}}>Hello Guest</span>
                <span className='header__optionLineTwo'style={{textDecoration:'none'}}>Sign in</span>
            </div>
        </Link>


            <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Order</span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
            </div>

                <Link to="/checkout">
                <div className="header__optionBasket">
                <ShoppingCartIcon />
                 <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span> {/* <!--optional chaining--> */}
                </div>
               </Link>
        </div>
    </div>
  )
}

export default Header