import "./Footer.css"
import whiteLogo from "../../Assets/Img/white_logo.png";
import firstIcon from "../../Assets/Img/1.png";
import secondIcon from "../../Assets/Img/2.png";
import { Link } from "react-router-dom";

const Footer = ({english, russian, uzbek}) =>{
return (
<footer className="footer">
    <div className="container">
        <div className="footer-header">
            <div className="footer-left" >
            <div className="footers-left">
                <a href="#" className="footer-brand">
                    <img src={whiteLogo} alt="" className="footer-img" />
                </a>
              {uzbek &&  <p className="footer-map">
              Toshkent, Yangi Qo'rg'on Azizxo'jayev,51
                </p>
                }
                {english &&  <p className="footer-map">
                Tashkent, Yangi Qo'rg'on Azizxo'jayev,51
                </p>
                }
                {russian &&  <p className="footer-map">
                Тошкент,Янги Қўрғон Азизхўжаев,51
                </p>
                }
                <p className="footer-tel">Tel:  +998 95 170 44 49</p>
                {uzbek && <p className="footer-email">
                    E-mail: info@alibaraka.com
                </p>}

                {russian && <p className="footer-email">
                Эл. адрес: info@alibaraka.com
                </p>}
                {english && <p className="footer-email">
                    E-mail: info@alibaraka.com
                </p>}
                </div>
 
                {english && 
                <ul className="  footer-lists">
                    <li className="footer-item">
                        <h4 className="footer-title">
                        Our company:
                        </h4>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                        Video
                        </a>
                    </li>
                    <li className="footer-item">
                        <Link to="/"  onClick={() =>
                            window.scroll({
                                top:2200
                            })
                        }   className="footer-link">
                            Our partners
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:3500
                            })
                        }  className="footer-link">
                            Blog
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:4200
                            })
                        }  className="footer-link">
                            Contacts
                        </Link>
                    </li>
                </ul>}

                {russian && 
                <ul className="  footer-lists">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Наша компания:
                        </h4>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                        видео
                        </a>
                    </li>
                    <li className="footer-item">
                    <Link to="/"    onClick={() =>
                            window.scroll({
                                top:2200
                            })
                        } 
                         >
                        Наши партнеры
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:3500
                            })
                        }  className="footer-link">
                        Блог
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:4200
                            })
                        }  className="footer-link">
                        Контакты
                        </Link>
                    </li>
                </ul>
                
                }
                {uzbek && 
                <ul className="  footer-lists">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Korxonamiz:
                        </h4>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                        Video
                        </a>
                    </li>
                    <li className="footer-item">
                    <Link to="/"    onClick={() =>
                            window.scroll({
                                top:2200
                            })
                        } className="footer-link" >
                        Hamkorlarimiz
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:3500
                            })
                        }  className="footer-link">
                            Blog 
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:4200
                            })
                        }  className="footer-link">
                            Aloqa
                        </Link>
                    </li>
                </ul>}
            </div>
            <div className="footer-right" >
            {english && 
                <ul className="  footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Our company:
                        </h4>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                        Video
                        </a>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:2200
                            })
                        } 
                     
                          className="footer-link">
                        Our partners
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:3500
                            })
                        }  className="footer-link">
                            Blog
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:4200
                            })
                        }  className="footer-link">
                            Contacts
                        </Link>
                    </li>
                </ul>}
                {russian && 
                <ul className="  footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Наша компания:
                        </h4>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                        видео
                        </a>
                    </li>
                    <li className="footer-item">
                        <Link to="/"  onClick={() =>
                            window.scroll({
                                top:2200
                            })
                        }
                        
                          className="footer-link">
                        Наши партнеры
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:3500
                            })
                        }  className="footer-link">
                        Блог
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:4200
                            })
                        }  className="footer-link">
                        Контакты
                        </Link>
                    </li>
                </ul>
                
                }
                {uzbek && 
                <ul className="  footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Korxonamiz:
                        </h4>
                    </li>
                    <li className="footer-item">
                        <a href="#" className="footer-link">
                        Video
                        </a>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:2200
                            })
                        }   className="footer-link">
                        Hamkorlarimiz
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:3500
                            })
                        }  className="footer-link">
                            Blog
                        </Link>
                    </li>
                    <li className="footer-item">
                        <Link to="/" onClick={() =>
                            window.scroll({
                                top:4200
                            })
                        }  className="footer-link">
                            Aloqa
                        </Link>
                    </li>
                </ul>}

           {english &&
                <ul className="footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                            Products
                        </h4>
                    </li>
                    <li className="footer-item">
                         <Link to="/" onClick={() =>
                            window.scroll({
                                top:800
                            })
                        }  className="footer-link">
                         The film
                        </Link>
                    </li>
                    <li className="footer-item">
                          <Link to="/" onClick={() =>
                            window.scroll({
                                top:1000
                            })
                        }   className="footer-link">
                            Zajim
                        </Link>
                    </li>
                    <li className="footer-item">
                         <Link to="/" onClick={() =>
                            window.scroll({
                                top:1000
                            })
                        }  className="footer-link">
                        Drip irrigation

                  </Link>
                    </li>
                    <li className="footer-item">
                         <Link to="/" onClick={() =>
                            window.scroll({
                                top:800
                            })
                        }  className="footer-link">
                        
Cooling system
       </Link>
                    </li>
                </ul>
                }
                {russian &&
                <ul className="footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Товары
                        </h4>
                    </li>
                    <li className="footer-item">
                         <Link to="/" onClick={() =>
                            window.scroll({
                                top:800
                            })
                        }  className="footer-link">
                        Плёнка
                        </Link>
                    </li>
                    <li className="footer-item">
                          <Link to="/" onClick={() =>
                            window.scroll({
                                top:1000
                            })
                        }   className="footer-link">
                        Зажим
                        </Link>
                    </li>
                    <li className="footer-item">
                         <Link to="/" onClick={() =>
                            window.scroll({
                                top:1000
                            })
                        }  className="footer-link">
                        Капельное орошение
                        </Link>
                  </li>
                    <li className="footer-item">
                         <Link to="/" onClick={() =>
                            window.scroll({
                                top:800
                            })
                        }  className="footer-link">
                        Система охлаждения
                        </Link>
         </li>
                </ul>
                }{uzbek &&
                    <ul className="footer-list">
                        <li className="footer-item">
    
                            <h4 className="footer-title">
                                Mahsulotlar
                            </h4>
                        </li>
                        <li className="footer-item">
                             <Link to="/" onClick={() =>
                            window.scroll({
                                top:800
                            })
                        }  className="footer-link">
                                Plyonka
                        </Link>
                        </li>
                        <li className="footer-item">
                              <Link to="/" onClick={() =>
                            window.scroll({
                                top:1000
                            })
                        }   className="footer-link">
                                Zajim
                       </Link>
                        </li>
                        <li className="footer-item">
                             <Link to="/" onClick={() =>
                            window.scroll({
                                top:1000
                            })
                        }  className="footer-link">
                            Tomchilab sug'orish
                            </Link>
                        </li>
                        <li className="footer-item">
                             <Link to="/" onClick={() =>
                            window.scroll({
                                top:800
                            })
                        }  className="footer-link">
                            Sovutish tizimi
                            </Link>
                        </li>
                    </ul>
                    }
                    {english &&
                <ul className="footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                            Blogs
                        </h4>
                    </li>
                    <li className="footer-item">
                         <Link to="/blogId=24" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Greenhouse ventilation
                        </Link>
                    </li>
                    <li className="footer-item">
                          <Link to="/blogId=29" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Location of the greenhouse
                        </Link>
                    </li>
                    <li className="footer-item">
                         <Link to="/blogId=27" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        } className="footer-link">
                        A place for a greenhouse

                        </Link>
                    </li>
                    <li className="footer-item">
                            <Link to="/blogId=27" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Buy a greenhouse
                        </Link>
                    </li>
                </ul>}
                {russian &&
                <ul className="footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Блоги




                        </h4>
                    </li>
                    <li className="footer-item">
                         <Link to="/blogId=24" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Вентиляция теплицы
                        </Link>
                    </li>
                    <li className="footer-item">
                          <Link to="/blogId=29" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Расположение теплицы
                        </Link>
                    </li>
                    <li className="footer-item">
                         <Link to="/blogId=30" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        } className="footer-link">
                        Место для теплицы
                        </Link>
                    </li>
 <li className="footer-item">
                            <Link to="/blogId=27" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Купить теплицу
                        </Link>
                    </li>
                </ul>}
                {uzbek &&
                <ul className="footer-list">
                    <li className="footer-item">

                        <h4 className="footer-title">
                        Bloglar



                        </h4>
                    </li>
                    <li className="footer-item">
                         <Link to="/blogId=24" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Issiqxona ventilyatsiyasi
                        </Link>
                    </li>
                    <li className="footer-item">
                          <Link to="/blogId=29" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Issiqxonaning joylashuvi
                        </Link>
                    </li>
                    <li className="footer-item">
                         <Link to="/blogId=27" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        } className="footer-link">
                        Issiqxona uchun joy

                        </Link>
                    </li>
                    <li className="footer-item">
                            <Link to="/blogId=27" onClick={() =>
                            window.scroll({
                                top:0
                            })
                        }  className="footer-link">
                        Issiqxonna sotib olish
                        </Link>
                    </li>
                </ul>}
                
            </div>
        </div>

        
        <div className="footer-bottom">
            {russian && <p className="footer-subtext">
                Все права защищены.
            </p>}
            {english && <p className="footer-subtext">
            All rights reserved.
            </p>}
            
            {uzbek && <p className="footer-subtext">
            Barcha huquqlar himoyalangan.
            </p>}
            <ul className="bottom-list">
          {russian &&      <p className="bottom-text">
                    Разработано 
                </p>}
                {english &&      <p className="bottom-text">
                Developed
                </p>}
                {uzbek &&      <p className="bottom-text">
                Ishlab chiqilgan
                </p>}
                <li className="bottom-item">
                    <a href="#" className="bottom-link">
                        <img src={firstIcon} alt="" className="bottom-logo" />
                    </a>
                </li>
                <li className="bottom-item">
                    <a href="#" className="bottom-link">
                        <img src={secondIcon} alt="" className="bottom-logo" />
                    </a>
                </li>
            </ul>
        </div>

    </div>
</footer>
)
}
export default Footer;