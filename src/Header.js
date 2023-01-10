import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src='pngimg.com - amazon_PNG11.png'/>
        <div className='header_search'>
            <input className='header_searching_input' type='text' />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <div className='header_option_l1'>
              <span>Hello, Ajay</span>
            </div>
            <div className='header_option_l2'>
              <span>Sign In</span>
            </div>
          </div>
          
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <div className='header_option_l1'>
            returns
            </div>
            <div className='header_option_l2'>
              orders
            </div>
          </div>
          
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <div className='header_option_l1'>
            your
            </div>
            <div className='header_option_l2'>
              prime
            </div>
          </div>
          
        </div>
        <div className='header_nav'>
          <div className='header_option'>
            <div className='header_option_l1'>

            </div>
            <div className='header_option_l2'>
              
            </div>
          </div>
          
        </div>
        <div className='header_optionBasket'>
        <ShoppingCartIcon/>
        <span className='header_option_l2 header_basketCount'>0</span>
        </div>
    </div>
  )
}

export default Header