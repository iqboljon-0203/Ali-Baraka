import "./Content.css";
import flag from "../../Assets/Img/flags.png"
import Accordion from "../Accordion/Accordion";
// import avatarImg from "../../Assets/Img/avatar.png"
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Client from "../Client/Client";
import Fade from 'react-reveal/Fade';

const Content = ({english, russian, uzbek})=>{
    // const [stories, setStories] = useState([]);

    // useEffect(() =>{
    //     fetch("https://alibaraka.pythonanywhere.com/api/stories/")
    //         .then((res) => res.json()).then((data) => 
    //         setStories(data))
    // },[])
return (
<div className="content">
    <div className="content-header">
        <div className="container">
           <Fade left>
                <div className="content-left"  >
                <img src={flag} alt="" className="content-img" />
            </div>
            </Fade>
            <Fade left>
           <div className="content-right" >
           {english && <h2 className="content-title">
                    
Frequently asked questions of customers 
                </h2>}
                {russian && <h2 className="content-title">
                
Часто задаваемые вопросы клиентов
                </h2>}
                {uzbek && <h2 className="content-title">
                Mijozlar tomonidan beriladigan eng ko'p savollar
                </h2>}
                {english &&
                <p className="content-text">
                   Here you can find answers to your interesting topics and find interesting information
                </p>}
                {uzbek &&
                <p className="content-text">
                 Bu yerda sizni qiziqtirgan mavzularga javob topa olasiz va qiziqarli ma'lumotlarni bilib olishingiz mumkin.
                </p>}
                {russian &&
                <p className="content-text">
               Здесь вы можете найти ответы на интересующие вас темы и узнать интересные информации.
                </p>}
                <Accordion english={english} russian={russian}
                 uzbek={uzbek} 
                className={"faq"} 
                />
            </div>
            </Fade>

        </div>
    </div>
    <Client english={english} russian={russian} uzbek={uzbek}   />
</div>
)
}

export default Content;
 