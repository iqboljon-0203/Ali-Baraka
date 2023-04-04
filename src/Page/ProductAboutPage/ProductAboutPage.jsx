import Nav from "../../Components/Nav/Nav";
import "./ProductAboutPage.css";
import productBtnThumb from "../../Assets/Img/productbtn.png";
// import ImgSwiper from "../../Components/ImgSwiper/ImgSwiper";
import Description from "../../Components/Description/Description";
import NewSwiper from "../../Components/NewSwiper/NewSwiper";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import { createRef, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperImg1 from "../../Assets/Img/mahsulot_As.png";
import swiperImg2 from "../../Assets/Img/mahsulot_past.png";
import Fade from 'react-reveal/Fade';
import productPic from "../../Assets/Img/header_img.png";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "../../Components/Products/Products";
import Modal from "../../Components/Modal/Modal";

const ProductAboutPage = ({english, russian, uzbek, change1, change2, change3}) => {


const [thumbsSwiper, setThumbsSwiper] = useState(null);
const [swippers, setSwippers] = useState([]);

const [pro, setProducts] = useState([]);
var {productId} = useParams()
useEffect(() => {
    fetch("https://api.alibaraka.com/api/product_by_category")
        .then((res) => res.json())
        .then((data) =>
        setProducts(data.find((e) => e.id == Number(productId)))
);
}, [productId]);
 

let ref1 = useRef();

function scrollTo(ref) {
if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
}

const { product } = useParams();


const [buyModal,setBuyModal] = useState(false)

function openBuyModal(){
    setBuyModal(!buyModal)
}

const [buy1Modal,setBuy1Modal] = useState(false)

function openBuy1Modal(){
    setBuy1Modal(!buy1Modal)
}

const [great1Modal, setGreat1Modal] =  useState(false);

function openGreat1Modal(){
    setGreat1Modal(!great1Modal)
}  

const formBtn = (e)=>{
 
    e.preventDefault();
//  console.log(e)
        if (e.target[0].value.length > 0
             && e.target[1].value.length > 0 
               ) {

            let botMessege = `
                 Salom, Yangi Xabar!😊%0A
                 Ismi 👤: ${e.target[0].value}%0A
                 Raqam ☎: ${e.target[1].value}%0A 
                 Xabar 💰: ${e.target[2].value}%0A + ni sotib olishmoqchi
                           
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
            // if(document.querySelector("#textarea").matches(".error-info")){
            //     document.querySelector("#textarea").classList.remove("error-info")
            //     document.querySelector("#errorInfo").classList.remove("error-info1")
            //     document.querySelector("#closestBtn").classList.remove("modal-closest-btn")
            //     document.querySelector("#closestBtn").classList.remove("close1-btn")  
            //     document.querySelector("#closestBtn1").classList.remove("closes-btn1")
            // }

//  console.log(e.target[0].value)

            e.target[0].value=""
            
       
            e.target[1].value=""       
            
            // e.target[2].value=""  
              
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
        // if(e.target[2].value.length < 1){
        //     document.querySelector("#textarea").classList.add("error-info")
        //     document.querySelector("#errorInfo").classList.add("error-info1")
        //     document.querySelector("#closestBtn").classList.add("modal-closest-btn")
        //     document.querySelector("#closestBtn").classList.add("close1-btn")  
        //     document.querySelector("#closestBtn1").classList.add("close2-btn")
        // }  
    }
  
}

const formBtn1 = (e)=>{
 
    e.preventDefault();
//  console.log(e)
        if (e.target[0].value.length > 0
             && e.target[1].value.length > 0 
               ) {

            let botMessege = `
                 Salom, Yangi Xabar!😊%0A
                 Ismi 👤: ${e.target[0].value}%0A
                 Raqam ☎: ${e.target[1].value}%0A 
                 Xabar 💾: ${e.target[2].value}%0A + haqida ma'lumot olishmoqchi
                           
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
          

            e.target[0].value=""
            
       
            e.target[1].value=""       
            
             
              
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
        // if(e.target[2].value.length < 1){
        //     document.querySelector("#textarea").classList.add("error-info")
        //     document.querySelector("#errorInfo").classList.add("error-info1")
        //     document.querySelector("#closestBtn").classList.add("modal-closest-btn")
        //     document.querySelector("#closestBtn").classList.add("close1-btn")  
        //     document.querySelector("#closestBtn1").classList.add("close2-btn")
        // }  
    }
  
}



return (
<div className="product-about1">
    <Nav english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
    <section className="product-about">
        <div className="product-top">
            <div className="container">

                {english && <h2 className="product-subname">

                    <span>
                        {pro.name_en}
                    </span>

                </h2>}
                {uzbek && <h2 className="product-subname">

                    <span>
                        {pro.name_uz}
                    </span>

                </h2>}
                {russian && <h2 className="product-subname">

                    <span>
                        {pro.name_ru}
                    </span>

                </h2>}

                <button className="product-subbtn"
                 onClick={()=> scrollTo(ref1)}>
                    <img src={productBtnThumb} alt="" className="product-thumb" />
                </button>
            </div>
        </div>
        <div className="product-medium">
            <img src={productPic} alt="" className="product-pic" />
        </div>
        <div className="product-bottom" ref={ref1}>
            <div className="container">
             
         <Fade left> 
        <div className="main-left"
          >
                    {english && <h2 className="main-title">
                        {pro.name_en}
                    </h2>}
                    {uzbek && <h2 className="main-title">
                        {pro.name_uz}
                    </h2>}
                    {russian && <h2 className="main-title">
                        {pro.name_ru}
                    </h2>}
                    {english &&  <p className="main-text">
                        {pro.sub_description_en}  
                    </p>}
                    {russian &&  <p className="main-text">
                        {pro.sub_description_ru}  
                    </p>}
                    {uzbek &&  <p className="main-text">
                        {pro.sub_description_uz}  
                    </p>}
                    {english && <p className="main-price">Price negotiable</p>}
                    {uzbek && <p className="main-price">Kelishilgan xolda</p>}
                    {russian && <p className="main-price">Цена договорная</p>}
                    <div className="main-footer">
                        <button className="main-btn"
                         onClick={()=> openBuyModal()}>
                        {uzbek &&    <span>XARID QILISH</span>}
                        {english &&    <span>BUYING</span>}
                        {russian &&    <span>ПОКУПКА</span>}
                        </button>
                        <button className="main-btn" onClick={()=> openBuy1Modal()}>
                        {uzbek &&     <span>BOG’LANISH</span>}
                        {english &&  <span>CONTACT</span>}
                        {russian &&    <span>КОНТАКТ</span>}
                        </button>
                    </div>
                 
                </div>
                </Fade>
               
          
                <Fade left>
                    <div className="main-right"
                  >
                    <div className="swiper-box">
                      
                        <Swiper 
                        style={{
                                        "--swiper-navigation-color": "#F3F4F6",
                                        "--swiper-pagination-color": "#F3F4F6",
                                    }} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]} className="mySwiper2">
                            <SwiperSlide style={{ background: "#F3F4F6" }}>
                                <img src={pro.image1} />
                            </SwiperSlide>

                            <SwiperSlide style={{ background: "#F3F4F6" }}>
                                <img src={pro.image2} />
                            </SwiperSlide>
                            <SwiperSlide style={{ background: "#F3F4F6" }}>
                                <img src={pro.image3} />
                            </SwiperSlide>
                            <SwiperSlide style={{ background: "#F3F4F6" }}>
                                <img src={pro.image1} />
                            </SwiperSlide>

                            <SwiperSlide style={{ background: "#F3F4F6" }}>
                                <img src={pro.image2} />
                            </SwiperSlide>


                        </Swiper>

                        <Swiper 
                        onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={3} freeMode={true}
                            watchSlidesProgress={true} modules={[FreeMode, Navigation, Thumbs]} className="mySwiper">
                            <SwiperSlide 
                            style={{
                                            background: "#F3F4F6",
                                            marginTop: "10px",
                                        }}>
                                <img src={pro.image1} />
                            </SwiperSlide>
                            <SwiperSlide
                             style={{
                                            background: "#F3F4F6",
                                            marginTop: "10px",
                                        }}>
                                <img src={pro.image2} />
                            </SwiperSlide>

                            <SwiperSlide style={{
                                            background: "#F3F4F6",
                                            marginTop: "10px",
                                        }}>
                                <img src={pro.image3} />
                            </SwiperSlide>
                            <SwiperSlide style={{
                                            background: "#F3F4F6",
                                            marginTop: "10px",
                                        }}>
                                <img src={pro.image1} />
                            </SwiperSlide>
                            <SwiperSlide style={{
                                            background: "#F3F4F6",
                                            marginTop: "10px",
                                        }}>
                                <img src={pro.image2} />
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                </Fade>
            </div>
            
            <Modal className="modal" show={buyModal}>
                <div className="login-box">
                    <button className="closes-btn" 
                    id="closestBtn" onClick={()=>setBuyModal()}>
                        &times;
                    </button>
                    <button className="closes-btn1 
                    closes1-btn" id="closestBtn1" 
                    onClick={()=>setBuyModal()}>
                        &times;
                    </button>
                  {uzbek &&  <h2>Xarid qilish</h2>}
                  {english &&  <h2>BUYING</h2>}
                  {russian &&  <h2>ПОКУПКА</h2>}
                    <form id="myForm" onSubmit={formBtn}>
                        <div className="user-box">
                            <input type="text" name="name" id="name" />
                         {english &&   <label>Name</label>}
                         {russian &&   <label>имя </label>}
                         {uzbek &&   <label>Ism</label>}
                           {uzbek && <p className="error-text text1-errors" id='errorText'>
             Siz ismingizni kiritmadingiz
              </p>}
              {russian && <p className="error-text text1-errors" id='errorText'>
              Вы не ввели свое имя
              </p>}
              {english && <p className="error-text text1-errors" id='errorText'>
              You didn't enter your name
              </p>}
                        </div>
                        <div className="user-box">
                            <input type="tel"  name="tel" id="tel"  />
                            {english && <label>Number</label>}
                            {russian && <label>
                                Hомер</label>}
                            {uzbek && <label>Nomer</label>}
                           {uzbek && <p className="tel-errors tel1-errors" id='errorTel'>
                    Siz raqamingizni kiritmadingiz
                    </p>}
                    {russian && <p className="tel-errors tel1-errors" id='errorTel'>
                    Вы не ввели свое имя
                    </p>}
                    {english && <p className="tel-errors tel1-errors" id='errorTel'>
                    You didn't enter your name
                    </p>}
                        </div>
                       {uzbek &&
                        <input id="mahsulot" class="user-mahsulot" type="button"
                         value={`${pro.name_uz}     `} /> 
                        }
                        {russian &&
                        <input id="mahsulot" class="user-mahsulot" type="button"
                         value={`${pro.name_ru}     `} /> 
                        }
                        {english &&
                        <input id="mahsulot" class="user-mahsulot" type="button"
                         value={`${pro.name_en}     `} /> 
                        }
                        {english && <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>}
                        {uzbek && <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Yuborish
                        </button>}
                        {russian && <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Отправить 
                        </button>}
                    </form>
                </div>

            </Modal>
            <Modal className="modal" show={buy1Modal}>
                <div className="login-box">
                    <button className="closes-btn" 
                    id="closestBtn" onClick={()=>setBuy1Modal()}>
                        &times;
                    </button>
                    <button className="closes-btn1 
                    closes1-btn" id="closestBtn1" 
                    onClick={()=>setBuy1Modal()}>
                        &times;
                    </button>
                    {uzbek && <h2>Bog'lanish</h2>}
                    {english && <h2>Connection</h2>}
                    {russian && <h2>Связь</h2>}
                    <form id="myForm" onSubmit={formBtn1}>
                        <div className="user-box">
                            <input type="text" name="name" id="name" />
                            {english &&   <label>Name</label>}
                         {russian &&   <label>имя </label>}
                         {uzbek &&   <label>Ism</label>}
                           {uzbek && <p className="error-text text1-errors" id='errorText'>
             Siz ismingizni kiritmadingiz
              </p>}
              {russian && <p className="error-text text1-errors" id='errorText'>
              Вы не ввели свое имя
              </p>}
              {english && <p className="error-text text1-errors" id='errorText'>
              You didn't enter your name
              </p>}
                        </div>
                        <div className="user-box">
                            <input type="tel"  name="tel" id="tel"  />
                            {english && <label>Number</label>}
                            {russian && <label>Hомер</label>}
                            {uzbek && <label>Nomer</label>}
                           {uzbek && <p className="tel-errors tel1-errors" id='errorTel'>
                    Siz raqamingizni kiritmadingiz
                    </p>}
                    {russian && <p className="tel-errors tel1-errors" id='errorTel'>
                    Вы не ввели свое имя
                    </p>}
                    {english && <p className="tel-errors tel1-errors" id='errorTel'>
                    You didn't enter your name
                    </p>}
                        </div>
                       
                        {uzbek && <input id="mahsulot"
                         class="user-mahsulot" 
                         type="button"
                         value={`${pro.name_uz}     `} />} 
                                                
                        {english && <input id="mahsulot" class="user-mahsulot" type="button"
                         value={`${pro.name_en}     `} />}
                                                
                        {russian && <input id="mahsulot" class="user-mahsulot" type="button"
                         value={`${pro.name_ru}     `} />}
                         {english && <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Submit
                        </button>}
                        {uzbek && <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Yuborish
                        </button>}
                        {russian && <button  type="submit" className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Отправить 
                        </button>}
                    </form>
                </div>

            </Modal>
            <Modal className="modal contacts-modal aloqa-modal" 
     show={great1Modal} >
   <a href="/"   className="aloqa-close  " onClick={()=>setGreat1Modal()}>
                    &times;
                </a>
                <div className="modal-footer  aloqa-footer">
       <h3 className="modal-titles">
       Murojaatingiz uchun tashakkur 

       </h3>
       {/* <p className="modal-infos">Biz o’zimiz siz
        bilan tez muddatda bog’lanamiz, lekin shoshilinch
         desangiz shu raqamga qo’ng’iroq qilsangiz 
         ham bo’ladi +9989900000000</p>
       <a href="/"  className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Done
                        </a> */}
       </div>
    </Modal>
        </div>
    </section>
    <section className="description">
       <Fade left>
            <div className="container" 
    
        >
            {english && <h2 className="description-title">
                Description
            </h2>}
            
            {uzbek && <h2 className="description-title">
            Tavsif
            </h2>}
            
            {russian  && <h2 className="description-title">
            Описание
            </h2>}
           {english && <p className="description-text">
                {pro.description_en}
            </p>
            }
              {uzbek && <p className="description-text">
                {pro.description_uz}
            </p>
            }
              {russian && <p className="description-text">
                {pro.description_ru}
            </p>
            }
        </div>
        </Fade>
    </section>
    <NewSwiper  english={english} russian={russian} uzbek={uzbek}  />

    <Contact  english={english} russian={russian} uzbek={uzbek}  />
    <Footer  english={english} russian={russian} uzbek={uzbek}  />
    
</div>
);
};
export default ProductAboutPage;