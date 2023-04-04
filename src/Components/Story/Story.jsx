 
import { useEffect, useState } from "react";
import "./Story.css"
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

const Story = ({english,uzbek,russian}) =>{
     const [stories, setStories] = useState([]);

    useEffect(() =>{
        fetch("https://api.alibaraka.com/api/blogs/")
            .then((res) => res.json()).then((data) => 
            setStories(data))
    },[])
     return(
         <div className="story" >
              <div className="container">
           {english &&       <h2 className="story-name">
                      More stories
                  </h2>
                  }
                  {russian &&       <h2 className="story-name">
                  Больше блогов
                  </h2>
                  }
                  {uzbek &&       <h2 className="story-name">
                      
                      Ko'proq bloglar
                  </h2>
                  }
                  {stories.length > 0 && (
                  <div className="story-box">
                  
                      {stories.filter(e => e.name_uz 
                      && e.name_ru && e.name_en
                      && e.description_uz && 
                      e.description_ru && 
                      e.description_en && e.image).map((
                          story, i) =>(
                  <Fade left  className="story-fade">
   
                      <ul  className="story-list">
                      
                          <Link 
                          to={`/blogId=${story.id}`}     onClick={() =>
                              window.scrollTo({ top:0 })
                          } >
                      <li className="story-item">
                          <img src={story.image} alt="imgs" className="story-img" />
                      </li>
                      <li className="story-item">
                      {uzbek &&  <h2 className="story-title">
                       {story.name_uz} 
                        </h2>}
                        {english &&  <h2 className="story-title">
                       {story.name_en} 
                        </h2>}
                        {russian &&  <h2 className="story-title">
                       {story.name_ru} 
                        </h2>}
                      </li>
                      <li className="story-item">
                       {english &&   <p className="story-text">
                            {story.description_en}
                          </p>
                          }
                          {russian &&   <p className="story-text">
                            {story.description_ru}
                          </p>
                          }
                          {uzbek &&   <p className="story-text">
                            {story.description_uz}
                          </p>
                          }
                      </li>
                  </Link></ul>
 
                  </Fade>
                          ))}
              
                  </div>
     )}
              </div>
         </div>
     )
}

export default Story;