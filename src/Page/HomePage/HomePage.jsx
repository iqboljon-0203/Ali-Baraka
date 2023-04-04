import Contact from "../../Components/Contact/Contact";
import Content from "../../Components/Content/Content";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Production from "../../Components/Production/Production";
import "./HomePage.css"
// import headerImg from "../../Assets/Img/f_1.jpg"
import headerImg from "../../Assets/Img/ddd11.png"
import HomeHeader from "../../Components/HomeHeader/HomeHeader";

const HomePage = ({english, russian, uzbek, change1, change2, change3}) =>{
     return(
         <div className="home">
             {/* <Header english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} /> */}

            <HomeHeader english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
            {/* <div className="iframe">
                <img className="header-pic"
                 src={headerImg} alt="" />
            </div>
            <Production english={english} russian={russian} uzbek={uzbek}  /> */}
            <Content  english={english} russian={russian} uzbek={uzbek} /> 
             <Contact english={english} russian={russian} uzbek={uzbek} />  
            
            <Footer english={english} russian={russian} uzbek={uzbek} />
            <div className="bottom">
                <img className="  bottom-pic" src={headerImg} alt="" />
            </div>
         </div>
     )
}

export default HomePage;