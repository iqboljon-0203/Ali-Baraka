import Client from "../../Components/Client/Client";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Nav from "../../Components/Nav/Nav";
import Products from "../../Components/Products/Products";
import "./ProductPage.css";
import "../HomePage/HomePage.css"
const ProductPage = ({english, russian, uzbek, change1, change2, change3}) => {
    return(
        <div className="product-page">
        <Nav english={english} russian={russian} uzbek={uzbek} change1={change1} change2={change2} change3={change3} />
        <section className="products-main">
        <Products english={english} russian={russian} uzbek={uzbek} />
        <Client english={english} russian={russian} uzbek={uzbek} />
        <Contact english={english} russian={russian} uzbek={uzbek} />
        </section>
        <Footer english={english} russian={russian} uzbek={uzbek} />
        
        </div>
    )
}

export default ProductPage;