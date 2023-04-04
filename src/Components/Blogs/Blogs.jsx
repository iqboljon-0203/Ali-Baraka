import "./Blogs.css"
import BlogsIcon from "../../Assets/Img/BlogIcon.png"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Blogs = ({english,uzbek,russian})=>{


    const [lastBlogs, setLastBlogs] = useState([]);

    useEffect(() => {
         fetch("https://api.alibaraka.com/api/blog_last/").then((res) => res.json()).then((data) => 
         setLastBlogs(data.Last)
    );
}, []);

return(
<section className="blogs">
    <Fade left>
    <div className="container">
{lastBlogs.length > 0 && (   
    <div className="blogs-box">
        {lastBlogs.filter((e) => e.name_uz &&
                e.description_uz && e.image && e.date
              ).map((lastBlog, i) => (
            <ul className="blogs-list" key={i}>
           {uzbek &&  <Link   to={`/blogId=${lastBlog.id}`}
               onClick={() =>
                            window.scrollTo({ top: 0 })
                        } >     <li className="blogs-item">
                    <img src={`https://api.alibaraka.com/files/${lastBlog.image}`} alt="" className="blogs-img" />
                </li>
                <li className="blogs-item">
                  <h3 className="blogs-title">
                       {lastBlog.name_uz}
                    </h3>
                </li>
                <li className="blogs-item">
                    <p className="blogs-text">
                       {lastBlog.description_uz}
                    </p>
                </li>
                <li className="blogs-item">
                    <p className="blogs-time">
                        {lastBlog.date}
                    </p>
                </li>
                </Link>}
                {english &&  <Link   to={`/blogId=${lastBlog.id}`}    onClick={() =>
                            window.scrollTo({ top: 0 })
                        } >     <li className="blogs-item">
                    <img src={`https://api.alibaraka.com/files/${lastBlog.image}`} alt="" className="blogs-img" />
                </li>
                <li className="blogs-item">
                  <h3 className="blogs-title">
                       {lastBlog.name_en}
                    </h3>
                </li>
                <li className="blogs-item">
                    <p className="blogs-text">
                       {lastBlog.description_en}
                    </p>
                </li>
                <li className="blogs-item">
                    <p className="blogs-time">
                        {lastBlog.date}
                    </p>
                </li>
                </Link>}
                {russian &&  <Link   to={`/blogId=${lastBlog.id}`}    onClick={() =>
                            window.scrollTo({ top: 0 })
                        } >     <li className="blogs-item">
                    <img src={`https://api.alibaraka.com/files/${lastBlog.image}`} alt="" className="blogs-img" />
                </li>
                <li className="blogs-item">
                  <h3 className="blogs-title">
                       {lastBlog.name_ru}
                    </h3>
                </li>
                <li className="blogs-item">
                    <p className="blogs-text">
                       {lastBlog.description_ru}
                    </p>
                </li>
                <li className="blogs-item">
                    <p className="blogs-time">
                        {lastBlog.date}
                    </p>
                </li>
                </Link>}
            </ul>
))}
        </div> )}

        <div className="blogs-footer">
            <Link to="/story"  onClick={() =>
                        window.scrollTo({ top: 700 })
                    } className="blogs-btn">
               {english && <span>
                MORE POSTS
                </span>
                }
                 {uzbek && <span>
                    YANA Bloglar
                </span>
                }
                 {russian && <span>
                    Больше блогов
                </span>
                }
            </Link>
        </div>
        
    </div>
     </Fade>
</section>
)
}

export default Blogs;