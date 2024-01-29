import Navbar from "../../header/nav-bar";
import Footer from "../../footer/footer";
import './bascet.css'
import CorzinaPusta from "./CorzinaPusta";
import NotEmpty from "./NotEmpty";
import items from '../../data/dataforcard.json';
import Product from "./Product";




export default function  Basket() {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="Bascet">
        <h1 className="h1Basc">Basket</h1>
        <div className="deliviry">
          <img src="../../src/img/del.jpg" className="delimg" />
          <div className="contforText">
            <p className="textdel">Happy ! </p>
            <p className="textdel2">Happy ! You are entitled to free shipping</p>
          </div>
        </div>

        <div className="korzina-menu">
          <ul className="korzina__menu">
            <div className="km1">
              <li className="korzina__menu__item">All</li>
              <li className="korzina__menu__item">Product Name</li>
            </div>
            <div className="km2">
              <li className="korzina__menu__item1">Unit Price</li>
              <li className="korzina__menu__item1">Total</li>
              <li className="korzina__menu__item1">Price</li>
            </div>
          </ul>
        </div>
        <div className="korzina-items">
        <Product/> 

        </div>
      </main>
      <Footer />
    </div>
  );
}
