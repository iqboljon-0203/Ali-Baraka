import "./Products.css";
// import ProductPic from "../../Assets/Img/product.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Fade from 'react-reveal/Fade';


const Products = ({english, russian, uzbek}) => {
const [products, setProducts] = useState([]);

useEffect(() => {
fetch("https://api.alibaraka.com/api/product_by_category")
.then((res) => res.json())
.then((data) => setProducts(data));
}, []);

var {id} = useParams()

// console.log(id);

var location = useLocation()

return (
<section className="products" id="explore">
    <div className="container">
       
       <Fade left>
            <div className="products-header" 
        >
     {english &&       <h2 className="products-title">our production</h2>
     }
     {russian &&       <h2 className="products-title">наше производство</h2>
     }
     {uzbek &&       <h2 className="products-title">Bizning mahsulotlar</h2>
     }
            <div className="products-box">
               {english &&  <p className="products-subtitle">
              
Choose product
</p>}
               {russian &&  <p className="products-subtitle">Выбирать  продукт</p>}
               {uzbek &&  <p className="products-subtitle">Mahsulotni tanlash </p>}
     
            </div>
            {products.length > 0 && (      <>
     
            <div className="products-blok">
                {products
                .filter((e) => e.name_uz &&
                e.cost && e.image1 &&
                e.category === Number(id))
                .map((product, i) => (
              <Fade left>
                    <ul className="products-list"
                 key={i} id={product.id} >
                    {english &&
                    <Link  className="pro-links"
                     to={`/categoryId=${product.category}/productId=${product.id}`}     
                    onClick={() =>
                        window.scrollTo({ top: 0 })
                    }> <li className="products-item">
                    <img src={product.image1} alt="" className="products-img" />
                    </li>
                    <li className="products-item">
                        <h3 className="products-name">
                            {product.name_en}
                        </h3>
                    </li>
                    <li className="products-item">
                        {uzbek && <p className="products-price">
                         <span className="products-narxi">Narxi:</span>Kelishilgan xolda
                        </p>}
                        {russian && <p className="products-price">
                        <span className="products-narxi">цена:</span> Цена договорная
                        </p>}
                        {english && <p className="products-price">
                        <span className="products-narxi">cost:</span> Price negotiable
                        </p>}
                    </li>
                    </Link>}
                    {uzbek &&
                    <Link  className="pro-links"  onClick={() =>
                        window.scrollTo({ top: 0 })
                    }
                    to={`/categoryId=${product.category}/productId=${product.id}`}>
                         <li className="products-item">
                    <img src={product.image1} alt="" className="products-img" />
                    </li>
                    <li className="products-item">
                        <h3 className="products-name">
                            {product.name_uz}
                        </h3>
                    </li>
                    <li className="products-item">
                        {uzbek && <p className="products-price">
                         <span className="products-narxi">Narxi:</span>Kelishilgan xolda
                        </p>}
                        {russian && <p className="products-price">
                        <span className="products-narxi">цена:</span> Цена договорная
                        </p>}
                        {english && <p className="products-price">
                        <span className="products-narxi">cost:</span> Price negotiable
                        </p>}
                    </li>
                    </Link>}
                    {russian &&
                    <Link  onClick={() =>
                        window.scrollTo({ top: 0 })
                    }  className="pro-links" to={`/categoryId=${product.category}/productId=${product.id}`}> <li className="products-item">
                    <img src={product.image1} alt="" className="products-img" />
                    </li>
                    <li className="products-item">
                        <h3 className="products-name">
                            {product.name_ru}
                        </h3>
                    </li>
                    <li className="products-item">
                        {uzbek && <p className="products-price">
                         <span className="products-narxi">Narxi:</span>Kelishilgan xolda
                        </p>}
                        {russian && <p className="products-price">
                        <span className="products-narxi">цена:</span> Цена договорная
                        </p>}
                        {english && <p className="products-price">
                        <span className="products-narxi">cost:</span> Price negotiable
                        </p>}
                    </li>
                    </Link>}
                </ul>
                </Fade>
                ))}
            </div>
       
          <Fade left>
                <div className="products-button"
           >
                <Link  to="/" onClick={() =>
                        window.scrollTo({ 
                            top: 900 })
                    } 
                     className="products-btn">
                    {uzbek && <span>Barchasini ko'rish</span>}
                    {english && <span>See them all</span>}
                    {russian && <span>Увидеть их всех</span>}
                </Link>
            </div></Fade>

            </>     )}
        </div>
        </Fade>
    </div>
</section>
);
};

export default Products;