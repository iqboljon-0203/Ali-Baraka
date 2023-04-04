import "./Header.css";
import greenLogo from "../../Assets/Img/green_logo.png";
import tel from "../../Assets/Img/tel.png";
import yarim from "../../Assets/Img/yarim.png";
import sqr from "../../Assets/Img/sqr.png";
import { Link } from "react-router-dom";
import video from "../../Assets/Img/bgvideo.mp4"
// import { useState } from "react";
import menuIcon from "../../Assets/Img/menu.png";
import message from "../../Assets/Img/message.png";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import SideBar from "../Menu/Menu1";
import BurgerIcon from "./BurgerIcon";
import Popup from "reactjs-popup";
import Menu2 from "../Menu/Menu2";
import Fade from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";
import i18next from "i18next"
import langSelect from "../../Components/langSelect/langSelect"
import LanguageComponents from "../../Components/langSelect/langSelect";
import { ref, createRef, useCallback } from "react";
import bgVideo from "../../Assets/Img/bgVideos1.mp4"
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


const Header = ({english, russian, uzbek, change1, change2, change3}) =>{


    const [btnModal, setBtnModal] = useState(false);
    
    function openBtnModal(){
        setBtnModal(!btnModal)
    }
    const [menuModal,setMenuModal]=useState(false);
    function openMenuModal(){
    setMenuModal(!menuModal)
    }
    const video = ()=>{
        const header = document.querySelector("header")
        const video = document.querySelector(".videocha")
        
        video.loop = true;
        video.load();

        if(header.matches(".gif-header")){
        header.classList.remove("headers");
        video.classList.remove("header-video","headers-video")
        header.classList.add("main-header");
        header.classList.remove("gif-header");
    
    }
        else{
           
            header.classList.add("gif-header");
            header.classList.add("headers");
            video.classList.add("header-video","headers-video")
            header.classList.remove("main-header");
        }
        }



    const [language,setLanguage] = useState(false)
    const [language1,setLanguage1] = useState(false)

    function changeHandle1(){
        change1(true)
        setLanguage(!language);
        
    }


        function changeHandle2(){
            change2(true)
            setLanguage(!language)
            
        }

        function changeHandle3(){
            change3(true)
            setLanguage(!language)
            
        }


        function changeHandle111(){
            change1(true)
            
            setLanguage1(!language1)
        }


        function changeHandle222(){
            change2(true)
            
            setLanguage1(!language1)
        }

        function changeHandle333(){
            change3(true)
            
            setLanguage1(!language1)
        }



        const [great1Modal, setGreat1Modal] =  useState(false);

        function openGreat1Modal(){
            setGreat1Modal(!great1Modal)
        }  

        const formBtn = (e)=>{

            e.preventDefault();
        //  console.log(e)
                if (e.target[0].value.length > 0
                    && e.target[1].value.length > 0   && e.target[2].value.length > 0
                    ) {

                    let botMessege = `
                        Salom, Yangi Xabar!😊%0A
                        Ismi 👤: ${e.target[0].value}%0A
                        Raqam ☎: ${e.target[1].value}%0A 
                        Xabar : ${e.target[2].value}%0A 
                                
                    `;
        //  console.log(botMessege)
            
                    let url =`https://api.telegram.org/bot5350924559:AAHBNxb1pyuYM_154h0PiPS59fC5t7yDuPo/sendMessage?chat_id=-1001707482554&text=${botMessege}`;
                //   console.log(url)
                    async function fetchAsync(url) {
                    let response = await fetch(url);
                    //   console.log(response,"1-si")
                    let data = await response.json();
                    // console.log(data,"2-si")
                    return data;
                    
                    }
                    fetchAsync(url);

                    if(document.querySelector("#name").matches(".input-error")){
                        document.querySelector("#name").classList.remove("input-error")       
                        document.querySelector("#errorText").classList.remove("error-text1")
                        document.querySelector("#closestBtn").classList.remove("close1-btn")  
                        document.querySelector("#closestBtn1").classList.remove("closes-btn1") }
                    if(document.querySelector("#tel").matches(".tel-error")){
                        document.querySelector("#tel").classList.remove("tel-error")
                        document.querySelector("#errorTel").classList.remove("error-tel1")
                        document.querySelector("#closestBtn").classList.remove("modal-closest-btn")
                        document.querySelector("#closestBtn").classList.remove("close1-btn")  
                        document.querySelector("#closestBtn1").classList.remove("closes-btn1")
                    }
                    if(document.querySelector("#textarea").matches(".error-info")){
                        document.querySelector("#textarea").classList.remove("error-info")
                        document.querySelector("#errorInfo").classList.remove("error-info1")
                        document.querySelector("#closestBtn").classList.remove("modal-closest-btn")
                        document.querySelector("#closestBtn").classList.remove("close1-btn")  
                        document.querySelector("#closestBtn1").classList.remove("closes-btn1")
                    }

        //  console.log(e.target[0].value)

                    e.target[0].value=""
                    
            
                    e.target[1].value=""       
                    
                    e.target[2].value=""  
                    
                    openGreat1Modal()
                    
            } 
            else{
                if(e.target[0].value.length < 1 ){
                    
                    document.querySelector("#name").classList.add("input-error")
                document.querySelector("#errorText").classList.add("error-text1")

                document.querySelector("#closestBtn").classList.add("close1-btn")  
                document.querySelector("#closestBtn1").classList.add("close2-btn")
            
                }
                if(e.target[1].value.length < 1){
                    document.querySelector("#tel").classList.add("tel-error")
                    document.querySelector("#errorTel").classList.add("error-tel1")
                    document.querySelector("#closestBtn").classList.add("modal-closest-btn")
                    document.querySelector("#closestBtn").classList.add("close1-btn")  
                    document.querySelector("#closestBtn1").classList.add("close2-btn")
                } 
                if(e.target[2].value.length < 1){
                    document.querySelector("#textarea").classList.add("error-info")
                    document.querySelector("#errorInfo").classList.add("error-info1")
                    document.querySelector("#closestBtn").classList.add("modal-closest-btn")
                    document.querySelector("#closestBtn").classList.add("close1-btn")  
                    document.querySelector("#closestBtn1").classList.add("close2-btn")
                }  
            }
        
        }

return(
<>
    <video autoPlay muted className="videocha header-video" id="myVideo">
        <source src={bgVideo} type="video/mp4" />
    </video>
    <header className="main-header">

        <div className="container">
            <div className="nav">
                <Link to="/" className="nav-brand">
                <img src={greenLogo} alt="green logo" className="nav-logo" />
                </Link>
                {/* <button className="menu-btn">
                    <img src={menuIcon} alt="" className="menu-icon" />
                </button> */}
         {english &&
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="nav-link">
                        Products
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        } className="nav-link">
                        About us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="nav-link">
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                        Contact
                    </a>
                </li>
                <li className="nav-item">
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
                <li className="nav-item">
                    <div className="navbar-phone">
                        <img src={tel} alt="telephon" className="navbar-tel" />
                    </div>
                    <div className="navbar-box">
                    <a href="tel:+998994054000" className="tel-link">
                                
                                99-405-40-00
                            </a>
                            <a href="tel:+998946666155" className="tel-link">
                                 
                                94-666-61-55
 
                            </a>
                    </div>

                </li>
            </ul>
        }
              {uzbek &&
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="nav-link">
                         Mahsulotlar
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        } className="nav-link">
                        Haqida
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="nav-link">
                        Blog
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                    Aloqa
                    </a>
                </li>
                <li className="nav-item">
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
                <li className="nav-item">
                    <div className="navbar-phone">
                        <img src={tel} alt="telephon" className="navbar-tel" />
                    </div>
                    <div className="navbar-box">
                    <a href="tel:+998994054000" className="tel-link">
                                
                                99-405-40-00
                            </a>
                            <a href="tel:+998946666155" className="tel-link">
                                 
                                94-666-61-55
 
                            </a>
                    </div>

                </li>
            </ul>
        }

{russian &&
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        } className="nav-link">
                         Товары
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 2100 })
                                        } className="nav-link">
                          О нас
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  to="/"   onClick={() =>
                                            window.scrollTo({ 
                                                top: 11000 })
                                        } className="nav-link">
                          Блог
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link">
                    Контакт
                    </a>
                </li>
                <li className="nav-item">
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
                <li className="nav-item">
                    <div className="navbar-phone">
                        <img src={tel} alt="telephon" className="navbar-tel" />
                    </div>
                    <div className="navbar-box">
                    <a href="tel:+998994054000" className="tel-link">
                                
                                99-405-40-00
                            </a>
                            <a href="tel:+998946666155" className="tel-link">
                                 
                                94-666-61-55
 
                            </a>
                    </div>

                </li>
            </ul>
        }
<div className="res-t">
        <div className="navbar-item">
                {english && 
                                <div className={`change-languages   `}>
                                    <input type="checkbox" id="language" checked={language1} onChange={() => setLanguage1(!language1)} />
                                    <label htmlFor='language' >ENG</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle111(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle222(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle333(true)}><a><a className='nav-link'>UZ</a></a></li>    
                                                                       
                                    </ul> 
                                </div>
                            }
                            {russian && 
                                <div className={`change-languages   `}>
                                    <input type="checkbox" id="language" checked={language1} onChange={() => setLanguage1(!language1)} />
                                    <label htmlFor='language' >RU</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle111(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle222(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle333(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                            {uzbek && 
                                <div className={`change-languages   `}>
                                    <input type="checkbox" id="language" checked={language1} onChange={() => setLanguage1(!language1)} />
                                    <label htmlFor='language' >UZ</label>
                                    <ul className={`language-menu ${!language && "d-none"}`}>
                                        <li onClick={() => changeHandle111(true)}><a><a className='nav-link'>RU</a></a></li>
                                        <li onClick={() => changeHandle222(true)}><a><a className='nav-link'>EN</a></a></li>
                                        <li onClick={() => changeHandle333(true)}><a><a className='nav-link'>UZ</a></a></li> 
                                    </ul> 
                                </div>
                            }
                </div>
                </div>
                <div style={styles}>
                    <Popup modal className="menu-popap" 
                    overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                        contentStyle={contentStyle} 
                        closeOnDocumentClick={false} 
                        trigger={open=>
                        <BurgerIcon open={open} />}
                        >
                        {close =>
                        <Menu2  close={close}
                        english={english} russian={russian} 
                        uzbek={uzbek} change1={change1} 
                      change2={change2} change3={change3}/>}
                    </Popup>
                    {/* <Popup modal className="menu-popap" 
                    overlayStyle={{ background: "rgba(255,255,255,0.98" }}
                        contentStyle={contentStyle} 
                        closeOnDocumentClick={false}
                         trigger={open=>
                        <BurgerIcon open={open} />}
                        >
                        {close =>
                        <Menu1 close={close}
                          english={english} russian={russian} 
                          uzbek={uzbek} change1={change1} 
                        change2={change2} change3={change3} />}
                    </Popup> */}

                </div>

            </div>
            <div className="header">
            {uzbek &&     <Fade left>
                          <div className="header-left"  >
           
        {uzbek &&   <h2 className="header-title">
        Samarali issiqxona quraylik!
         </h2>}

         {russian &&   <h2 className="header-title">
         Построим продуктивную теплицу!
         </h2>}
         {english &&   <h2 className="header-title">
         Let's build a productive greenhouse!
         </h2>}
     {russian && <p className="header-text">
     Теплиц много, но обращайтесь к нам, если хотите сделать ее продуктивной и эффективной. Мы построим его, так как вы задумали. Обогащайте свою теплицу необходимым оборудованием вместе с нами!
    
     </p>}
     {uzbek && <p className="header-text">
     Issiqxonalar ko'p, lekin unumli va samarali bo'lishini istasangiz biz bilan bog'laning. Biz uni siz o'ylaganingizdek quramiz. Issiqxonangizni kerakli jihozlar bilan biz bilan boyiting!
     </p>}  {english && <p className="header-text">
     There are many greenhouses, but contact us if you want to make it productive and efficient. We will build it as you think. Enrich your greenhouse with the necessary equipment with us!
     </p>}
     <span className="btns-span">
         <Link to="/" className="header-btn" onClick={() =>
                                            window.scrollTo({ 
                                               top: 900 })
                                        }  > 
             <span >Yana</span>
         </Link>
         <button onClick={video} className="header-buttons">
             <div className="
              header-triangles"></div>
         </button>
     </span>
 </div>
            
             

 

                </Fade>}
                {english &&     <Fade left>
                          
                
            <div className="header-left"  >
           
                          <h2 className="header-title">
                          ALL FOR GREENHOUSES
                        </h2>
                    <p className="header-text">
                        Here will be brief information about our company and some of advantages of our offers. Here will
                        be
                        brief information about our company.
                    </p>
                    <span className="btns-span">
                        <Link to="/" className="header-btn" onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        }  > 
                            <span >EXPLORE</span>
                        </Link>
                        <button onClick={video} className="header-buttons">
                            <div className="
                             header-triangles"></div>
                        </button>
                    </span>
                </div> 
                
                      
                                      </Fade>}
                {russian &&     <Fade left>
                          
                
             
    <div className="header-left"  >
           
                          <h2 className="header-title">
                          ВСЕ ДЛЯ ТЕПЛИЦ
                        </h2>
                    <p className="header-text">
                    Здесь будет краткая информация о нашей компании и некоторые преимущества наших предложений. Здесь будет
                         быть
                         краткая информация о нашей компании.
                    </p>
                    <span className="btns-span">
                        <Link to="/" className="header-btn" onClick={() =>
                                            window.scrollTo({ 
                                                top: 900 })
                                        }  > 
                            <span >Далее</span>
                        </Link>
                        <button onClick={video} className="header-buttons">
                            <div className="
                             header-triangles"></div>
                        </button>
                    </span>
                </div>

                </Fade>}
                <div className="header-right">
                    <img src={yarim} alt="" className="header-circle" />
                    <div className="header-box">

                        <img src={sqr} alt="" className="header-sqr" />
                        <button onClick={video} 
                        className="header-button">
                            <div className="header-triangle"></div>
                        </button>
                    </div>
                </div>
                <button className="msg-btn" 
                onClick={()=> openBtnModal()}>
                    <img src={message} alt="" className="msg-icon" />
                </button>

            </div>
            {uzbek && <Modal className="modal" show={btnModal}>
                <div className="login-box">
                    <button className="closes-btn" id="closestBtn" onClick={()=>setBtnModal()}>
                        &times;
                    </button>
                    <button className="closes-btn1 closes1-btn" id="closestBtn1" onClick={()=>setBtnModal()}>
                        &times;
                    </button>
                    <h2>Aloqa</h2>
                    <form id="myForm" onSubmit={formBtn}>
                        <div className="user-box">
                            <input type="text" name="name" id="name" />
                            <label>Ism</label>
                            <p className="error-text text1-errors" id='errorText'>
             Siz ismingizni kiritmadingiz
              </p>
                        </div>
                        <div className="user-box">
                            <input type="tel"  name="tel" id="tel"  />
                            <label>Telefon</label>
                            <p className="tel-errors tel1-errors" id='errorTel'>
                    Siz raqamingizni kiritmadingiz
                    </p>
                        </div>
                        <div className="user-box">
                        <input id="textarea"
                name="textarea" className="user-textarea" />
                 <label>Subject</label>
                 <span className="info-errors" id='errorInfo'>
                    Siz murojaat kiritmadingiz
                    </span>
                        </div>
                        <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Yuborish
                        </button>
                    </form>
                </div>

            </Modal>
     }
        {english && <Modal className="modal" show={btnModal}>
                <div className="login-box">
                    <button className="closes-btn" id="closestBtn" onClick={()=>setBtnModal()}>
                        &times;
                    </button>
                    <button className="closes-btn1 closes1-btn" id="closestBtn1" onClick={()=>setBtnModal()}>
                        &times;
                    </button>
                    <h2>Contact</h2>
                    <form id="myForm" onSubmit={formBtn}>
                        <div className="user-box">
                            <input type="text" name="name" id="name" />
                            <label>Name</label>
                            <p className="error-text text1-errors" id='errorText'>
                            You didn't enter your name
              </p>
                        </div>
                        <div className="user-box">
                            <input type="tel"  name="tel" id="tel"  />
                            <label>Phone</label>
                            <p className="tel-errors tel1-errors" id='errorTel'>
                            You didn't enter your number
                    </p>
                        </div>
                        <div className="user-box">
                        <input id="textarea"
                name="textarea" className="user-textarea" />
                 <label>Subject</label>
                 <span className="info-errors" id='errorInfo'>
                 You didn't submit an offer
                    </span>
                        </div>
                        <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>
                    </form>
                </div>

            </Modal>
     }
         {russian && <Modal className="modal" show={btnModal}>
                <div className="login-box">
                    <button className="closes-btn" id="closestBtn" onClick={()=>setBtnModal()}>
                        &times;
                    </button>
                    <button className="closes-btn1 closes1-btn" id="closestBtn1" onClick={()=>setBtnModal()}>
                        &times;
                    </button>
                    <h2>Контакт</h2>
                    <form id="myForm" onSubmit={formBtn}>
                        <div className="user-box">
                            <input type="text" name="name" id="name" />
                            <label>Имя</label>
                            <p className="error-text text1-errors" id='errorText'>
                            Вы не ввели свое имя
              </p>
                        </div>
                        <div className="user-box">
                            <input type="tel"  name="tel" id="tel"  />
                            <label>Телефон</label>
                            <p className="tel-errors tel1-errors" id='errorTel'>
                            Вы не ввели свой номер
                    </p>
                        </div>
                        <div className="user-box">
                        <input id="textarea"
                name="textarea" className="user-textarea" />
                 <label>Тема</label>
                 <span className="info-errors" id='errorInfo'>
                 Вы не отправили предложение
                    </span>
                        </div>
                        <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            предлагать
                        </button>
                    </form>
                </div>

            </Modal>
     }
     
     
       {uzbek &&     <Modal className="modal contacts-modal aloqa-modal" 
     show={great1Modal} >
   <a href="/"   className="aloqa-close  " onClick={()=>setGreat1Modal()}>
                    &times;
                </a>
                <div className="modal-footer  aloqa-footer">
                {/* <img className='modal-true' src={trueIcon} alt="true" /> */}
       <h3 className="modal-titles">
       Murojaatingiz uchun tashakkur 

       </h3>
       {/* <p className="modal-infos">Biz o’zimiz siz
        bilan tez muddatda bog’lanamiz, lekin shoshilinch
         desangiz shu raqamga qo’ng’iroq qilsangiz 
         ham bo’ladi +998951704449</p>
       <a href="/"  className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Bajarildi
                        </a> */}
       </div>
    </Modal>
    }

{english &&     <Modal className="modal contacts-modal aloqa-modal" 
     show={great1Modal} >
   <a href="/"   className="aloqa-close  " onClick={()=>setGreat1Modal()}>
                    &times;
                </a>
                <div className="modal-footer  aloqa-footer">
                {/* <img className='modal-true' src={trueIcon} alt="true" /> */}
       <h3 className="modal-titles">
       Thank you for your request

       </h3>
       {/* <p className="modal-infos">We are you
         We will contact you soon, but in a hurry
          if you call this number
          will also be +998951704449</p>
       <a href="/"  className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Done
                        </a> */}
       </div>
    </Modal>
    }
    {russian &&     <Modal className="modal contacts-modal aloqa-modal" 
     show={great1Modal} >
   <a href="/"   className="aloqa-close  " onClick={()=>setGreat1Modal()}>
                    &times;
                </a>
                <div className="modal-footer  aloqa-footer">
                {/* <img className='modal-true' src={trueIcon} alt="true" /> */}
       <h3 className="modal-titles">
       Спасибо за ваш запрос

       </h3>
       {/* <p className="modal-infos">Мы это ты
          Мы свяжемся с вами в ближайшее время, но торопимся
           если вы позвоните по этому номеру
           также будет +998951704449</p>
       <a href="/"  className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Готово
                        </a> */}
       </div>
    </Modal>
    }
    
        </div>
    </header>
</>
)
}

export default Header;