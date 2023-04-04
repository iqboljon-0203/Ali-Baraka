import "./Production.css";
import plyonka from "../../Assets/Img/plyonka.png";
import zajim from "../../Assets/Img/zajim.png";
import tomchi from "../../Assets/Img/tomchi.png";
import issiqxona from "../../Assets/Img/issiqxona.png";
import isitish from "../../Assets/Img/isitish.png";
import qoshimcha from "../../Assets/Img/qoshimcha.png";
import traktor from "../../Assets/Img/traktor.png";
import companyRamka from "../../Assets/Img/company_ramka.png";
import aylanaCompany from "../../Assets/Img/aylana_company.png";
import bulut from "../../Assets/Img/bulut.png";
import Fade from 'react-reveal/Fade';
import Splides from "../Splides/Splides";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../Page/HomePage/HomePage.css";
import i18next from "i18next"
import { useTranslation } from "react-i18next";
import VideoModal from "../VideoModal/VideoModal";



const Production = ({english, russian, uzbek}) => {
    
    const [videoModal, setVideoModal] = useState(false);
    
    function openVideoModal(){
        setVideoModal(!videoModal)
    } 

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://api.alibaraka.com/api/categories/")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
 
 

    return (
        <section className="section" id="products">
            <div className="container">
                <h2 className="section-title">Our Productions</h2>
                <p className="section-text">
                    "Your work is going to fill a large part of your life, and
                    the only way to be truly satisfied is to do what you believe
                    is great work
                </p>

                {products.length > 0 && (
                    <ul className="section-list">
                        {products.filter((e) => e.name_uz 
                        && e.text && e.image)
                            .map((product, i) => (
                               <Fade left>
                                    <li
                                    key={i}
                                    id={product.id}
                                    className="section-item"
                                    >
                                       {uzbek && 
                                    <Link
                                        id={product.id}
                                        className="sections-link"
                                        to={`/categoryId=${product.id}`}
                                        onClick={() =>
                                            window.scrollTo({ top: 0 })
                                        } >
                                        <img
                                            src={product.image}
                                            alt="img"
                                            className="section-img" />
                                        <div className="section-blok">
                                            <h3 className="section-subtitle">
                                                {product.name_uz}
                                                {/* {t('lang') === 'uz' ? product.name_uz : t('lang') === 'ru' ? product.name_ru : product.name_en} */}
                                            </h3>
                                            <p className="section-subtext">
                                                {product.text}
                                            </p>
                                        </div>
                                    </Link>
}
{english && 
                                    <Link
                                        id={product.id}
                                        className="sections-link"
                                        to={`/categoryId=${product.id}`}
                                        onClick={() =>
                                            window.scrollTo({ top: 0 })
                                        } >
                                        <img
                                            src={product.image}
                                            alt="img"
                                            className="section-img"  />
                                        <div className="section-blok">
                                            <h3 className="section-subtitle">
                                                {product.name_en}
                                                {/* {t('lang') === 'uz' ? product.name_uz : t('lang') === 'ru' ? product.name_ru : product.name_en} */}
                                            </h3>
                                            <p className="section-subtext">
                                                {product.text}
                                            </p>
                                        </div>
                                    </Link>
}
{russian && 
                                    <Link
                                        id={product.id}
                                        className="sections-link"
                                        to={`/categoryId=${product.id}`}
                                        onClick={() =>
                                            window.scrollTo({ top: 0 })
                                        }
                                    >
                                        <img
                                            src={product.image}
                                            alt="img"
                                            className="section-img"
                                        />
                                        <div className="section-blok">
                                            <h3 className="section-subtitle">
                                                {product.name_ru}
                                            </h3>
                                            <p className="section-subtext">
                                                {product.text}
                                            </p>
                                        </div>
                                    </Link>
}
                                </li>
                                </Fade>
                            ))}
                    </ul>
                )}

                <div className="about" id="about">
              <Fade left>
                        <div
                        className="about-left"
                         
                    >
                        <h2 className="about-title">
                            little ABout our company
                        </h2>
                        <p className="about-text">
                            "Your work is going to fill a large part of your
                            life, and the only way to be truly satisfied is to
                            do what you believe is great work. And the only way
                            to do great work is to love what you do."
                        </p>
                        <div className="about-footer">
                        <Link to="/blogs" className="about-link" onClick={() =>
                                            window.scrollTo({ top: 0 })
                                        }> <span>MORE ABOUT</span>
                            </Link> 
                            <a href="#" onClick={()=> openVideoModal()}  className="about-link">
                                <span>OUR YOUTUBE</span>
                            </a>
                        </div>
                    </div>
                    </Fade>
                 
                    <div className="about-right">
                    <Fade left>    <div
                            className="ramka-img"
                        
                        >
                            <img src={companyRamka} alt="" />
                        </div>
                        </Fade>
                        <Fade right> <div className="traktor-img">
                            <img
                                src={traktor}
                                alt=""
                                 
                            />
                        </div></Fade>
                        <Fade right>
                         <div
                            className="aylana-img"
                            
                        >
                            <img alt="" src={aylanaCompany} />
                        </div>
                        </Fade>
                        <Fade right>
                        <div
                            className="bulut-img"
                             
                        >
                            <img src={bulut} alt="" />
                        </div></Fade>
                    </div>
                
                </div>
            </div>
            <Splides />
            <VideoModal className="modal video-modal" 
                show={videoModal} >
                <a href="/"   className="aloqa-close  " onClick={()=>setVideoModal()}>
                    &times;
                </a>
                <iframe  className="video-iframe" src="https://www.youtube.com/embed/121obV8gsCk" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </VideoModal>
        </section>
    );
};
export default Production;
 