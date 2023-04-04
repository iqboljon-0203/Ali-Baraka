import "./Nav.css";
import greenLogo from "../../Assets/Img/green_logo.png";
import tel from "../../Assets/Img/tel.png";
import { Link } from "react-router-dom";
import menuIcon from "../../Assets/Img/menu.png";
import BurgerIcon from "../Header/BurgerIcon";
import Popup from "reactjs-popup";
import Menu1 from "../Menu/Menu1";
import { useState } from "react";
import Menu2 from "../Menu/Menu2";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    marginTop: "40px"
  };
  const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
  };
  

const Nav = ({english, russian, uzbek, change1, change2, change3}) =>{


    

    const [language,setLanguage] = useState(false)
 
function changeHandle1(){
    change1(true)
    setLanguage(!language)
}


function changeHandle2(){
    change2(true)
    setLanguage(!language)
}

function changeHandle3(){
    change3(true)
    setLanguage(!language)
}
return(
   <div className="navbar">
        <div className="container">
            <Link to="/" className="navbar-brand">
                <img src={greenLogo} alt="green logo" className="navbar-logo" />
            </Link>
            {english &&
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="navbar-link">
                        Products
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        } className="navbar-link">
                        About us
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link  to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="navbar-link">
                        Blog
                    </Link>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                        Contact
                    </a>
                </li>
                <li className="navbar-item">
                {english && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >ENG</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li>    
                                                                       
                                    </ul> 
                                </div>
                            }
                            {russian && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >RU</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                            {uzbek && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >UZ</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                </li>
                <li className="navbar-item">
                    <div className="navbar-phone">
                        <img src={tel} alt="telephon" className="navbar-tel" />
                    </div>
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
        }
              {uzbek &&
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="navbar-link">
                         Mahsulotlar
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        } className="navbar-link">
                        Haqida
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link  to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="navbar-link">
                        Blog
                    </Link>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                    Aloqa
                    </a>
                </li>
                <li className="navbar-item">
                {english && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >ENG</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li>    
                                                                       
                                    </ul> 
                                </div>
                            }
                            {russian && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >RU</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                            {uzbek && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >UZ</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                </li>
                <li className="navbar-item">
                    <div className="navbar-phone">
                        <img src={tel} alt="telephon" className="navbar-tel" />
                    </div>
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
        }

{russian &&
            <ul className="navbar-list">
                <li className="navbar-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="navbar-link">
                         Товары
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        } className="navbar-link">
                          О нас
                    </Link>
                </li>
                <li className="navbar-item">
                    <Link  to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="navbar-link">
                          Блог
                    </Link>
                </li>
                <li className="navbar-item">
                    <a href="#contact" className="navbar-link">
                    Контакт
                    </a>
                </li>
                <li className="navbar-item">
                {english && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >ENG</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li>    
                                                                       
                                    </ul> 
                                </div>
                            }
                            {russian && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >RU</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                            {uzbek && 
                                <div className={`change-language   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >UZ</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                </li>
                <li className="navbar-item">
                    <div className="navbar-phone">
                        <img src={tel} alt="telephon" className="navbar-tel" />
                    </div>
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
        }


{/*  *************************************************************************************************************/}


        <div className="res-til">
        <div className="navbar-item">
                {english && 
                                <div className={`change-languages   `}>
                                    <input type="checkbox" id="language"
                                     checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >ENG</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li>    
                                                                       
                                    </ul> 
                                </div>
                            }
                            {russian && 
                                <div className={`change-languages   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >RU</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                            {uzbek && 
                                <div className={`change-languages   `}>
                                    <input type="checkbox" id="language" checked={language} onChange={() => setLanguage(!language)} />
                                    <label htmlFor='language' >UZ</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle1(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle2(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle3(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                </div>
                </div>
           
            <div style={styles}>
     <Popup
         modal className="menu-popap"
         overlayStyle={{ background: "rgba(255,255,255,0.98" }}
         contentStyle={contentStyle}
         closeOnDocumentClick={false}
         trigger={open => <BurgerIcon open={open} />} >
      {close => <Menu2 close={close} english={english} russian={russian} uzbek={uzbek} change1={change1}  change2={change2} change3={change3} />}
    </Popup>
             </div>

        </div>
        
    </div>
 
)
}

export default Nav;