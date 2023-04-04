import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import newsSplide from "../../Assets/Img/news.png"
import "./NewSwiper.css"
import Fade from 'react-reveal/Fade';
const NewSwiper = ({english,uzbek,russian}) =>{
const [newProducts, setNewProducts] = useState([])

const {id}=useParams()

// console.log(id)

useEffect(() =>{
fetch("https://api.alibaraka.com/api/product_by_category/")
.then((res) => res.json()).then((data) =>
  setNewProducts(data)
)
},[id])

 
return (
<div className="splide">
  <div className="container-fluid">
    <div className="splide1-name">
    {uzbek &&<h2 className="splide-name">
        Boshqa mahsulotlar
    </h2>}
    {english &&<h2 className="splide-name">
    Other products
    </h2>}
    {russian &&<h2 className="splide-name">
    Другие товари
    </h2>}
    </div>
    <>
      {newProducts.length > 0 && (
     <Fade left>
        <Splide  
       className='splide-slide' options={ { type : 'loop' ,
        perPage:
        5, perMove: 1, autoplay: true, } }>
     
        {newProducts.filter((e) => e.name_uz &&   
        e.image1).map((newProduct, i) => (
       
       
          <SplideSlide key={i} style={
            {
             "margin": "0px 5px","padding": "15px 25px"}}
         className='splide-box'>
      {uzbek &&    <Link  onClick={()=>
      window.scrollTo({top:0})}  


      to={`/categoryId=${newProduct.category}/productId=${newProduct.id}`}   



          className="splide-link"> 
          <img style={{"background":"#F3F4F6"}} 
          className='splide-img' 
          src={newProduct.image1} alt="Image1" />
          <h4 className="splite-title">
          {newProduct.name_uz} </h4>
          <p className="splite-text">
          <span className="products-narxi">Narxi:</span> Kelishilgan xolda </p>
          </Link>
          }
           {english &&    <Link  onClick={()=>
           window.scrollTo({top:0})} 
           to={`/categoryId=${newProduct.category}/productId=${newProduct.id}`}   
          className="splide-link"> 
          <img style={{"background":"#F3F4F6"}} 
          className='splide-img' 
          src={newProduct.image1} alt="Image1" />
          <h4 className="splite-title">
          {newProduct.name_en} </h4>
          <p className="splite-text">
          
          <span className="products-narxi">cost:</span>  Price negotiable </p>
          </Link>
          }
           {russian &&    <Link  onClick={()=>
           window.scrollTo({top:0})} 
           to={`/categoryId=${newProduct.category}/productId=${newProduct.id}`}   
           className="splide-link"> 
          <img style={{"background":"#F3F4F6"}} 
          className='splide-img' 
          src={newProduct.image1} alt="Image1" />
          <h4 className="splite-title">
          {newProduct.name_ru} </h4>
          <p className="splite-text">
          <span className="products-narxi">цена:</span> Цена договорная</p>
          </Link>
          }
        </SplideSlide>
        ))}

      </Splide>

      </Fade>
      )}


    </>
    
  </div>
</div>

)
}

export default NewSwiper;