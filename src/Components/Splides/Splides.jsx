import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import "./Splides.css"
import mikrosoft from "../../Assets/Img/logos_microsoft.png"
import google from "../../Assets/Img/logos_wordpress.png"
import wordpress from "../../Assets/Img/logos_google.png"
import slack from "../../Assets/Img/logos_slack.png"
import { useEffect, useState } from 'react';
import Slide from 'react-reveal/Slide';
const Splides = () =>{
  

  const [partners, setPartners] = useState([]);

  useEffect(() => {
      fetch("https://api.alibaraka.com/api/partners/")
          .then((res) => res.json())
          .then((data) => setPartners(data));
  }, []);

return (
<div className="splides">
  <div className="container">
  {partners.length > 0 && (
   <Slide bottom cascade> <Splide  
       className='splide-slide'
        options={ { type : 'loop' , perPage:
        4, autoplay: true, } }>
         
         {partners.map((partner,i) =>(
        <SplideSlide key={i} 
         className='splide-box'>
          <a href="#" className="splide-link">
          <img className='splide-img' src={partner.image} alt="Image1" />
         
          </a>
        </SplideSlide>
         ))}
         
      </Splide>
      </Slide>
  )}

{partners.length > 0 && (
      <ul className="splides-list">
        {partners.map((partner,i) =>(
        <li className="splides-item" key={i}>
          <a href="#" className="splides-link">
            <img src={partner.image} alt="" 
            className="splides-img" />
          </a>
        </li>
        ))}
         
      </ul>
)}
  </div>
  
</div>

)
}

export default Splides;