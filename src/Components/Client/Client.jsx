import "../Content/Content.css";
//  import "../Client/Client.css";

import avatarImg from "../../Assets/Img/prs.png"
 
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Client = ({english,uzbek,russian})=>{

    const [lastBlogs, setLastBlogs] = useState([]);

    useEffect(() => {
         fetch("https://api.alibaraka.com/api/blog_last/").then((res) => res.json()).then((data) => 
         setLastBlogs(data.Last)
    );
}, []);
// console.log(da)
 


     return(
        <div className="client" id="blogs">
        <div className="container">
        <Fade left cascade>
           
        <div className="client-left" 
             >
              {/* {english &&     <h2 className="client-title">
                    How our client made 10x revenue
                </h2>}
                {russian &&     <h2 className="client-title">
                Как наш клиент увеличил доход в 10 раз
                </h2>}
                {uzbek &&     <h2 className="client-title">
                Qanday qilib mijozimiz 10 baravar daromad olgan ?
                </h2>} */}
                <div className="client-footer">
               {english &&     <div className="client-box">
                        <h4 className="client-subtitle">
                        "Today, food security is becoming the most pressing issue in the world."
                        </h4>
                        <p className="client-text">
                        Greenhouses are a great source of employment and exports.
                         Encourage a wide range of entrepreneurs to increase greenhouses,
                         they need all the help they can get.
                        </p>
                        <p className="client-name">
                        Sh.Mirziyoyev
                        </p>
                    </div>}
                    {uzbek &&     <div className="client-box">
                        <h4 className="client-subtitle">
                        "Bugungi kunda oziq-ovqat xavfsizligi butun dunyoda eng dolzarb muammoga aylanib bormoqda."
                        </h4>
                        <p className="client-text">
                      Issiqxonalar aholi bandligini ta’minlash va mahsulot eksport qilishning katta manbai. 
                        Issiqxonalarni ko‘paytirish uchun tadbirkorlarning keng doirasini qiziqtirish, 
                        ularga har tomonlama yordam berish zarur.
                        </p>
                        <p className="client-name">
                        Sh.Mirziyoyev
                        </p>
                    </div>}
                    {russian &&     <div className="client-box">
                        <h4 className="client-subtitle">
                        «Сегодня продовольственная безопасность становится самой актуальной проблемой в мире».
                        </h4>
                        <p className="client-text">
                        Теплицы - отличный источник занятости и экспорта.
                         Поощрять широкий круг предпринимателей к увеличению теплиц,
                         им нужна вся помощь, которую они могут получить.
                        </p>
                        <p className="client-name">
                        Ш.Мирзиёев
                        </p>
                    </div>}
                    <div className="client-avatar">
                        <img src={avatarImg} alt="" className="client-avatar" />
                    </div>
                    
                </div>
            </div>
             
            
            </Fade>
            <Fade left cascade>
            <div className="client-right"    id="blogs">
                {english &&
                <h2 className="client-subtitr">
                    Useful blogs
                </h2>}
                {uzbek &&
                <h2 className="client-subtitr">
                    Foydali bloglar
                </h2>}
                {russian &&
                <h2 className="client-subtitr">
                    Полезные блоги
                </h2>}
                {lastBlogs.length > 0 && (   
                <ul className="client-list">
                 {lastBlogs.filter((e) => e.name_uz &&
                e.description_uz && e.image && e.date
              ).map((lastBlog, i) => (
                <>    {uzbek &&<li className="client-item" key={i} >
                        <h3 className="client-subject">
                        {lastBlog.name_uz}</h3>
                        <p className="client-slogan">
                        {lastBlog.description_uz}  </p>
                        <Link 
                        
                        to={`/blogId=${lastBlog.id}`}    
                         onClick={() =>
                            window.scrollTo({ top: 0 })
                        }
                        className="client-sublink">
                         Ko'proq ma'lumot
                        </Link>
                    </li>
                    
                }
                {english &&<li className="client-item" key={i} >
                        <h3 className="client-subject">
                        {lastBlog.name_en}</h3>
                        <p className="client-slogan">
                        {lastBlog.description_en}  </p>
                        <Link 
                        
                        to={`/blogId=${lastBlog.id}`}     onClick={() =>
                            window.scrollTo({ top: 0 })
                        }
                        className="client-sublink">
                         More information
                        </Link>
                    </li>
                    
                }
                  {russian &&<li className="client-item" key={i} >
                        <h3 className="client-subject">
                        {lastBlog.name_ru}</h3>
                        <p className="client-slogan">
                        {lastBlog.description_ru}  </p>
                        <Link 
                        
                        to={`/blogId=${lastBlog.id}`}     onClick={() =>
                            window.scrollTo({ top: 0 })
                        }
                        className="client-sublink">
                         Много информация
                        </Link>
                    </li>
                    
                }</>
                 
                   
              ))}
                    {english &&  <Link to="/story"
                      onClick={() =>
                                           
                        window.scrollTo({ top: 500 })
                                        } className="client-link">
                        More 
                    </Link>}
                    {uzbek &&  <Link to="/story"
                      onClick={() =>
                                            window.scrollTo
                                            ({ top: 500 })
                                        } className="client-link">
                        Ko'proq 
                    </Link>}
                    {russian &&  <Link to="/story"
                      onClick={() =>
                                            window.scrollTo(
                                                { top: 500 })
                                        } className="client-link">
                        Больше 
                    </Link>}
                </ul>)}
                 
            </div>
            </Fade>
        </div>
    </div>
     )
}


export default Client;