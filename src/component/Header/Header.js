import React from 'react'
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import './Header.scss';
function Header() {
  return (
        <div className='header'>
            <div className='container'>
                <div className='header__logo'>
                    <span>O</span>
                    <span>T</span>
                    <span>D</span>
                </div>
                <div className='header__menu'>
                    <div className='header__menu__list'>
                        <ul className='control__list'>
                            <li>
                                <a href='/'>Home</a>
                            </li>
                            <li>
                                <a href='/'>Product</a>
                            </li>
                            <li>
                                <a href='/'>Posts</a>
                            </li>
                            <li>
                                <a href='/'>Contact</a>
                            </li>
                        </ul>
                        <ul className='control__uesr'>
                            <li>
                                <a href='/'><ShoppingCartOutlined /></a>
                            </li>
                            <li>
                                <a href='/'><UserOutlined /></a>
                                
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header

