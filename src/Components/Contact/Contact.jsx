import "./Contact.css"
import contactImg from "../../Assets/Img/hesiting.png"
import leftRamka from "../../Assets/Img/hesitating_ramka.png"
import rightRamka from "../../Assets/Img/aylana_sariq.png"
import yarimAylana1 from "../../Assets/Img/yarim_aylana1.png"
import { useState } from "react"
import Modal from "../Modal/Modal"
import Fade from 'react-reveal/Fade';

const Contact = ({english, russian, uzbek }) =>{

    const [greatModal, setGreatModal] =  useState(false);

    function openGreatModal(){
        setGreatModal(!greatModal)
    }  
    
    const formBtn = (e)=>{
 
        e.preventDefault();
    //  console.log(e)
            if (e.target[0].value.length > 0
                 && e.target[1].value.length > 0 && e.target[2].value.length > 0
                   ) {
    
                let botMessege = `
                     Salom, Yangi Xabar!😊%0A
                     Ismi 👤: ${e.target[0].value}%0A
                     Raqam ☎: ${e.target[1].value}%0A 
                     Xabar ☎: ${e.target[2].value}%0A              
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
                }
                if(document.querySelector("#tel").matches(".tel-error")){
                    document.querySelector("#tel").classList.remove("tel-error")
                     document.querySelector("#errorTel").classList.remove("error-tel1")
                }
             
                if(document.querySelector("#textarea").matches(".error-info")){
                    document.querySelector("#textarea").classList.remove("error-info")
                    document.querySelector("#errorInfo").classList.remove("error-info1")
                }

    //  console.log(e.target[0].value)
    
                e.target[0].value=""
                
           
                e.target[1].value=""       
                
                e.target[2].value=""   
                  
                openGreatModal()
                
        } 
        else{
            if(e.target[0].value.length < 1 ){
                
                document.querySelector("#name").classList.add("input-error")
               document.querySelector("#errorText").classList.add("error-text1")
            }
            if(e.target[1].value.length < 1){
                document.querySelector("#tel").classList.add("tel-error")
                document.querySelector("#errorTel").classList.add("error-tel1")
            } 
            if(e.target[2].value.length < 1){
                document.querySelector("#textarea").classList.add("error-info")
                document.querySelector("#errorInfo").classList.add("error-info1")
            }   
        }
      
    }



return(
    <Fade  left    cascade>
<div className="contact" id="contact"
  >
    <div className="container">
        <div className="contact-left">
            <img src={leftRamka} alt="" className="contact-ramka" />
        </div>
        <div className="contact-box" >
         {english &&
            <div className="contact-header">
                <img src={contactImg} alt="" className="contact-img" />
                <h3 className="contact-title">
                Do you have any questions for us? 


                </h3>
                <p className="contact-text">
                If you have any suggestions or questions, please write here, we are always ready to answer.
                </p>
            </div>
            }
              {uzbek &&
            <div className="contact-header">
                <img src={contactImg} alt="" className="contact-img" />
                <h3 className="contact-title">
                Bizga savollaringiz bormi?


                </h3>
                <p className="contact-text">
                Agar sizda biror taklif yoki savollar bo'lsa, mana shu yerda yozib qoldiring, biz doim javob berishga shaymiz.
                </p>
            </div>
            }
              {russian &&
            <div className="contact-header">
                <img src={contactImg} alt="" className="contact-img" />
                <h3 className="contact-title">
                У вас есть к нам вопросы?


                </h3>
                <p className="contact-text">
                Если у вас есть какие-либо предложения или вопросы, пишите сюда, мы всегда готовы ответить.
                </p>
            </div>
            }
          {uzbek &&
            <form className="contact-form"  id="myForm" onSubmit={formBtn}>
                <span className="contact-span">
                   <label  className="contact-label">
                    <input name="name" id="name" type="text"  placeholder="Ismingizni kiriting" className="contact-input" />
                    <p className="error-text" id='errorText'>
             Siz ismingizni kiritmadingiz
              </p>
                    </label>
                    <label  className="contact-label">
                    <input name="tel" id="tel" type="tel"  placeholder="+998931487733" className="contact-input" />

                    <p className="tel-errors " id='errorTel'>
                    Siz telefon raqamingizni kiritmadingiz
                    </p>
                    </label>
                   
                </span>
                <label  className="contact-label">
                <textarea placeholder="Murojaatni kiriting" id="textarea"
                name="textarea" className="contact-textarea" />
                <span className="info-errors" id='errorInfo'>
                    Siz murojaat kiritmadingiz
                    </span>
               </label> <button type="submit" id="btnSubmit" className="contact-btn">
                    {/* <span> */}
                    Xabar Jo'natish
                    {/* </span> */}
                </button>
                
            </form>
           }
              {english &&
            <form className="contact-form"  id="myForm" onSubmit={formBtn}>
                <span className="contact-span">
                   <label  className="contact-label">
                    <input name="name" id="name" type="text"  placeholder="Enter your name" className="contact-input" />
                    <p className="error-text" id='errorText'>
                    You didn't enter your name
              </p>
                    </label>
                    <label  className="contact-label">
                    <input name="tel" id="tel" type="tel"  placeholder="+998931487733" className="contact-input" />

                    <p className="tel-errors " id='errorTel'>
                    You didn't enter your phone number
                    </p>
                    </label>
                   
                </span>
                <label  className="contact-label">
                <textarea placeholder="Enter your subject" id="textarea"
                name="textarea" className="contact-textarea" />
                <span className="info-errors" id='errorInfo'>
                You did not apply
                    </span>
               </label> <button type="submit" id="btnSubmit" className="contact-btn">
                    {/* <span> */}
                    Send Message
                    {/* </span> */}
                </button>
                
            </form>
           }
                {russian &&
            <form className="contact-form"  id="myForm" onSubmit={formBtn}>
                <span className="contact-span">
                   <label  className="contact-label">
                    <input name="name" id="name" type="text"  placeholder="Enter your name" className="contact-input" />
                    <p className="error-text" id='errorText'>
                    Вы не ввели свое имя
              </p>
                    </label>
                    <label  className="contact-label">
                    <input name="tel" id="tel" type="tel"  placeholder="+998931487733" className="contact-input" />

                    <p className="tel-errors " id='errorTel'>
                    Вы не ввели свой номер телефона
                    </p>
                    </label>
                   
                </span>
                <label  className="contact-label">
                <textarea placeholder="Enter your subject" id="textarea"
                name="textarea" className="contact-textarea" />
                <span className="info-errors" id='errorInfo'>
                Вы не подали заявку
                    </span>
               </label> <button type="submit" id="btnSubmit" className="contact-btn">
                    {/* <span> */}
                    Отправить сообщение
                    {/* </span> */}
                </button>
                
            </form>
           }
        </div>
    
        <div className="contact-right">
            <img src={rightRamka} alt="" className="contact-ramka" />
        </div>
        <div className="contacts-right">
            <img src={yarimAylana1} alt="yarimAylana1" className="contacts-ramka" />
        </div>
        
    </div>
  {uzbek &&  <Modal className="modal contacts-modal" 
     show={greatModal} >
    <button className="close-btn" onClick={()=>setGreatModal()}>
                    &times;
                </button>
                <div className="modal-footer aloqa-footer">
                {/* <img className='modal-true' src={trueIcon} alt="true" /> */}
                <h3 className="modal-titles">
       Murojaatingiz uchun tashakkur 

       </h3>
       {/* <p className="modal-infos">Biz o’zimiz siz
        bilan tez muddatda bog’lanamiz, lekin shoshilinch
         desangiz shu raqamga qo’ng’iroq qilsangiz 
         ham bo’ladi +9989900000000</p> */}
       {/* <button onClick={()=>setGreatModal()}    className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Tashakkur
                        </button> */}
       </div>
    </Modal>
    }
     {english &&  <Modal className="modal contacts-modal" 
     show={greatModal} >
    <button className="close-btn" onClick={()=>setGreatModal()}>
                    &times;
                </button>
                <div className="modal-footer aloqa-footer">
                {/* <img className='modal-true' src={trueIcon} alt="true" /> */}
                <h3 className="modal-titles">
                Thank you for your request 

       </h3>
       {/* <p className="modal-infos">We are you
         We will contact you soon, but in a hurry
          if you call this number
          will also be +9989900000000</p>
       <button onClick={()=>setGreatModal()}    className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Thank you
                        </button> */}
       </div>
    </Modal>
    }
      {russian &&  <Modal className="modal contacts-modal" 
     show={greatModal} >
    <button className="close-btn" onClick={()=>setGreatModal()}>
                    &times;
                </button>
                <div className="modal-footer aloqa-footer">
                {/* <img className='modal-true' src={trueIcon} alt="true" /> */}
                <h3 className="modal-titles">
                Спасибо за ваш запрос

       </h3>
       {/* <p className="modal-infos">Мы это ты
          Мы свяжемся с вами в ближайшее время, но торопимся
           если вы позвоните по этому номеру
           также будет +9989900000000</p>
       <button onClick={()=>setGreatModal()}    className="s-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Спасибо
                        </button> */}
       </div>
    </Modal>
    }
</div>
</Fade>
)
}

export default Contact;