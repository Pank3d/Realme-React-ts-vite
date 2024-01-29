import './osnova.css'
import items from "../data/dataforcard.json"
import Card from "../card/card";
import { Link } from 'react-router-dom';

export default function Osnova(){
    return (
      <main className="osnova">
        <div className="carts">
          <div className="cart">
            <img src="../src/img/smart.svg" alt="" />
            <p>Smartphones</p>
          </div>
          <div className="cart">
            <img src="../src/img/tele.svg" alt="" />
            <p>TV</p>
          </div>
          <div className="cart">
            <img src="../src/img/lap.svg" alt="" />
            <p>Laptop</p>
          </div>
          <div className="cart">
            <img src="../src/img/clock.svg" alt="" />
            <p>Accessories</p>
          </div>
        </div>
        <div className="cs">
          <h1>Realme C Series</h1>
          <p>Dear to Leap</p>
          <button className="btn1">View all types</button>
        </div>
        <div className="cardandbanner">
          <img src="../src/img/banner.jpg" alt="" className="banner" />
          <div className="card1andcart2cont">
            <Link to="/realmeC33" className="pathtoSmartCard">
              <div className="card1">
                {items.slice(0, 1).map((item) => (
                  <Card {...item} />
                ))}
              </div>
            </Link>
            <div className="card2">
              {items.slice(1, 2).map((item) => (
                <Card {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="cs">
          <h1>Audio & Wearable</h1>
          <p>Dear to Leap</p>
          <button className="btn1">View all types</button>
        </div>
        <div className="cardandbanner">
          <img src="../src/img/banner2.jpg" alt="" className="banner" />
          <div className="card1andcart2cont">
            <div className="card1">
              {items.slice(2, 3).map((item) => (
                <Card {...item} />
              ))}
            </div>
            <div className="card2">
              {items.slice(3, 4).map((item) => (
                <Card {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="cs">
          <h1>Smart Life</h1>
          <p>Dear to Leap</p>
          <button className="btn1">View all types</button>
        </div>
        <div className="cardandbanner">
          <img src="../src/img/banner3.jpg" alt="" className="banner" />
          <div className="card1andcart2cont">
            <div className="card1">
              {items.slice(4, 5).map((item) => (
                <Card {...item} />
              ))}
            </div>
            <div className="card2">
              {items.slice(5, 6).map((item) => (
                <Card {...item} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );

}