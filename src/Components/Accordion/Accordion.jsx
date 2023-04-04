import { useEffect, useState } from "react";
import "./Accordion.css";
 

const Accordion = (props ) =>{
const [selected, setSelected] = useState(null);

function toggler(i){
    if(selected === i){
      return setSelected(null)
    }
     setSelected(i)
   }
   const [questions, setQuestions] = useState([]);

   useEffect(() =>{
       fetch("https://api.alibaraka.com/api/questions/")
           .then((res) => res.json()).then((data) => 
           setQuestions(data))
   },[])

return (
<>
  <div className="details">
  {questions.length > 0 && (
    <ul className={`faq_list ${props.className ? props.className : "" }`}>
      {questions.map((question, i) =>(
   
      <li key={i} className="faq_list__item" onClick={()=> toggler(i)}>
        <div className="text_wrap faq_list__item__question_wrapper">
        
        {props.uzbek &&   <h4 className="faq_header">
            {question.question_uz}
          </h4>}
          {props.english &&   <h4 className="faq_header">
            {question.question_en}
          </h4>}
          {props.russian &&   <h4 className="faq_header">
            {question.question_ru}
          </h4>}
          <span className={`icon ${selected===i ? 'closer' : 'opener' }`}>
            +
          </span>
        </div>
        <div className={`text_wrap ${selected===i ? 'faq_list__item__answer_wrapper show'
          : 'faq_list__item__answer_wrapper' }`}>
             {props.uzbek &&
          <p className="faq_text">
            {question.answer_uz}
          </p>}
          {props.english &&
          <p className="faq_text">
            {question.answer_en}
          </p>}
          {props.russian &&
          <p className="faq_text">
            {question.answer_ru}
          </p>}
        </div>
      </li>
   
    

       ))}
    </ul>)}
  </div>
</>
)
}

export default Accordion;