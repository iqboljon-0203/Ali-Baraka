import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css"


const Menu2= ({ close , english, russian, uzbek, change1, 
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

 
        <ul className="navbars-list">
        <button className="close-menu" onClick={close}>
        &times;
        </button>
                <li className="navbar-item">
                {english &&     <Link to="/" onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="navbar-link">
                        Products
                    </Link>}
                    {uzbek && 
                      <Link to="/" onClick={() =>
                        window.scrollTo({ 
                            top: 900 })
                    }  className="navbar-link">
                        Mahsulotlar
                    </Link>
                    }
                     {russian && 
                      <Link to="/" onClick={() =>
                        window.scrollTo({ 
                            top: 900 })
                    } className="navbar-link">
                      Товары
                    </Link>
                    }
                </li>
                <li className="navbar-item">
                   {english && <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        }
                    className="navbar-link">
                        About us
                    </Link>
                    }
                      {uzbek && <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        }
                    className="navbar-link">
                        Biz haqimizda
                    </Link>
                    }
                      {russian && <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        }
                    className="navbar-link">
                         О нас
                    </Link>
                    }
                </li>
                <li className="navbar-item">
                   {english && <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="navbar-link">
                        Blog
                    </Link>
                    }
                      {russian && <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="navbar-link">
                      Блог
                    </Link>
                    }  {uzbek && <Link to="/"   onClick={() =>
                        window.scrollTo({ 
                            top: 11000 })
                    } 
                    className="navbar-link">
                    Blog
                </Link>
                }
                </li>
                <li className="navbar-item">
                  {english &&  
                  <Link to="/"   onClick={() =>
                        window.scrollTo({ 
                            top: 30000 })
                    }  className="navbar-link">
                        Contact
                    </Link>
                    }
                     {uzbek &&  <Link to="/"   onClick={() =>
                        window.scrollTo({ 
                            top: 30000 })
                    } className="navbar-link">
                        Aloqa
                    </Link>
                    }
                     {russian &&  <Link  to="/"  onClick={() =>
                        window.scrollTo({ 
                            top: 30000 })
                    } className="navbar-link">
                     Контакт
                    </Link>
                    }
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
               
            </ul>

  </div>)}
;
export default Menu2;