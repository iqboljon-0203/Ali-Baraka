import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Story from "../../Components/Story/Story";
import "./StoryPage.css"

const StoryPage = ({english, russian, uzbek, change1, change2,
    change3}) =>{
     return(
         <div className="story-page">
             <Header english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3}   />
             <Story english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
             <Contact english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
             <Footer english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3}  />
             <div className="bottom"></div>
         </div>
     )
}

export default StoryPage;