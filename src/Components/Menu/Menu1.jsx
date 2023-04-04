import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"


const Menu1= ({ close , english, russian, uzbek, change1, 
    change2, change3}) => {
        const [language,setLanguage] = useState(false)
       
        function changeHandle11(){
            change1(true)
            setLanguage(!language)
        }
        
        
        function changeHandle22(){
            change2(true)
            setLanguage(!language)
        }
        
        function changeHandle33(){
            change3(true)
            setLanguage(!language)
        }
        return(
  
  <div className="menu1">

  {english &&
        <ul className="navbars-list">
        <button className="close-menu" onClick={close}>
        &times;
        </button>
                <li className="navbar-item">
                    <Link to="#products" className="navbar-link">
                        Products
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="#about" 
                    className="navbar-link">
                        About us
                    </Link>
                </li>
                <li className="navbar-item">
                    <a href="#blogs" className="navbar-link">
                        Blog
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                        Contact
                    </a>
                </li>
                
                <li className="navbar-item">
                    
                    <div className="navbar-box">
                        <a href="tel:+998950048090" 
                        className="tel-link">
                            95-004-80-90
                        </a>
                        <a href="tel:+998946414000" className="tel-link">
                            94-641-40-00
                        </a>
                    </div>

                </li>
               
            </ul>}

            {uzbek &&
        <ul className="navbars-list">
        <button className="close-menu" onClick={close}>
        &times;
        </button>
                <li className="navbar-item">
                    <Link to="#products" className="navbar-link">
                    Mahsulotlar
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="#about" 
                    className="navbar-link">
                        Haqida
                    </Link>
                </li>
                <li className="navbar-item">
                    <a href="#blogs" className="navbar-link">
                        Blog
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                    Aloqa
                    </a>
                </li>
                
                <li className="navbar-item">
                    
                    <div className="navbar-box">
                        <a href="tel:+998950048090" 
                        className="tel-link">
                            95-004-80-90
                        </a>
                        <a href="tel:+998946414000" className="tel-link">
                            94-641-40-00
                        </a>
                    </div>

                </li>
               
            </ul>}
            {russian &&
        <ul className="navbars-list">
        <button className="close-menu" onClick={close}>
        &times;
        </button>
                <li className="navbar-item">
                    <Link to="#products" className="navbar-link">
                    Товары
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="#about" 
                    className="navbar-link">
                         О нас
                    </Link>
                </li>
                <li className="navbar-item">
                    <a href="#blogs" className="navbar-link">
                    Блог
                    </a>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                    Контакт
                    </a>
                </li>
                
                <li className="navbar-item">
                    
                    <div className="navbar-box">
                        <a href="tel:+998950048090" 
                        className="tel-link">
                            95-004-80-90
                        </a>
                        <a href="tel:+998946414000" className="tel-link">
                            94-641-40-00
                        </a>
                    </div>

                </li>
               
            </ul>}
  </div>)}
;
export default Menu1;