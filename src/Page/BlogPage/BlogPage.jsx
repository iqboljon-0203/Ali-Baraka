import Nav from "../../Components/Nav/Nav";
import "./BlogPage.css";
import productBtnThumb from "../../Assets/Img/productbtn.png";
import Footer from "../../Components/Footer/Footer";
import Contact from "../../Components/Contact/Contact";
import { ref, createRef, useCallback, useState, useEffect, useRef } from "react";
import dev from "../../Assets/Img/dev.png";
import Blogs from "../../Components/Blogs/Blogs";
import productPic from "../../Assets/Img/header_img.png";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const BlogPage = ({english, russian, uzbek, change1, change2, change3}) => {
// const ref = createRef();
// const scrollToBottomOfList = useCallback(() => {
// ref.current.scrollIntoView({
// behavior: "smooth",
// block: "end",
// });
// }, [ref]);

// const handleButtonClick = useCallback(() => {
// scrollToBottomOfList();

// }, []);


const [blogs, setBlogs] = useState([]);

var {blogsId} = useParams()

useEffect(() => {
fetch("https://api.alibaraka.com/api/blogs/")
.then((res) => res.json())
.then((data) => setBlogs(data.find((e)=>
e.id == Number(blogsId)

)));

}, [blogsId]);


let ref11 = useRef();

function scrollTo(ref11) {
if (!ref11.current) return;
    ref11.current.scrollIntoView({ behavior: "smooth" });
}





return (
<div className="blog-page">
    <Nav english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
    <section className="product-about">
        <div className="product-top">
            <div className="container">

                <h2 className="product-subname products-subname">
                    {english &&
                    <span>
                        {blogs.name_en}
                    </span>
                    }
                    {russian &&
                    <span>
                        {blogs.name_ru}
                    </span>
                    }
                    {uzbek &&
                    <span>
                        {blogs.name_uz}
                    </span>
                    }
                </h2>

                <a href="#bosil" className="product-subbtn"
                          onClick={()=> scrollTo(ref11)}>
                    <img src={productBtnThumb} alt=""
                     className="product-thumb" />
                </a>
            </div>
        </div>
        <div className="product-medium">
            <img src={productPic} alt="" className="product-pic" />
        </div>

        <div className="medium" >

            <Fade left>

                <div className="container" ref={ref11} id="bosil">
                    {english && <h3 className="medium-title">{blogs.name_en}</h3>
                    }
                    {uzbek && <h3 className="medium-title">
                        {blogs.name_uz}</h3>
                    }
                    {russian && <h3 className="medium-title">{blogs.name_ru}</h3>
                    }{english && <span className="medium-span">
                        <p className="medium-name">
                            <b>{blogs.author_en}</b>
                        </p>
                        <p className="medium-date">{blogs.date}</p>
                    </span>}
                    {uzbek && <span className="medium-span">
                        <p className="medium-name">
                            <b>{blogs.author_uz}</b>
                        </p>
                        <p className="medium-date">{blogs.date}</p>
                    </span>}
                    {russian && <span className="medium-span">
                        <p className="medium-name">
                            <b>{blogs.author_ru}</b>
                        </p>
                        <p className="medium-date">{blogs.date}</p>
                    </span>}

                    <img src={blogs.image} alt=""
                     className="medium-avatar" />
                    {english &&
                    <p className="medium-text">
                        {blogs.description_en}
                    </p>}
                    {russian &&
                    <p className="medium-text">
                        {blogs.description_ru}
                    </p>}
                    {uzbek &&
                    <p className="medium-text">
                        {blogs.description_uz}
                    </p>}


                </div>
            </Fade>


        </div>

        <Blogs english={english} uzbek={uzbek} russian={russian} />
    </section>

    <Contact english={english} uzbek={uzbek} russian={russian} />
    <Footer english={english} uzbek={uzbek} russian={russian} />
</div>
);
};
export default BlogPage;