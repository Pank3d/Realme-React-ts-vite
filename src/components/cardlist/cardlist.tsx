import "./cardlst.css"
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperClass from "/home/maxim/ReactTs/footshop/node_modules/swiper/types/swiper-class"
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import p1 from "../../img/c33p1.jpg"
import p2 from "../../img/c33p2.jpg"
import p3 from "../../img/c33p3.jpg"
import p4 from "../../img/c33p4.jpg"
import { FreeMode, Navigation, Thumbs} from "swiper/modules";
import color from "../data/dataforcardlist.json"



export default function Cardlist() {
 
  const thumbsSwiper= useRef<SwiperClass| null>(null) 
  const [colorClick, setColorClick] = useState<number>(1)
  const [confClick, setConfClick] = useState<number>(1)
  const[mathClick, setMathClick] = useState<number>(1)
  const [liChek, setLiCheck] = useState<number>(1)
  const [swiper, setSwiper] = useState<number>(1)

  const liChekFunc = (state:number) => {
    setLiCheck(state)
  }

  const  swiperFunc = (state:number) => {
    setSwiper(state)
  } 

  const colorFunc = (id:string) => {
    setColorClick(parseInt(id))
  }

  const confFunc = (e:number) => {
    setConfClick(e)
  }

  const mathFuncPl = () =>{
    if (mathClick > 0){
      setMathClick(mathClick + 1)
    }else{
      console.log("cant")
    }
  }

  const mathFuncMin = () =>{
    if (mathClick > 1){
      setMathClick(mathClick - 1)
    }else{
      console.log("cant")
    }
  }



  return (
    <div className="card-container">
      <ul className="contforrow">
        <li onClick={() => liChekFunc(1)} className={liChek === 1 ? 'active-Spec' : 'row1'}>
          Buy now
        </li>
        <li onClick={() => liChekFunc(2)} className={liChek === 2 ? 'active-Spec' : 'row1'}>
          Specification
        </li>
      </ul>
      <div className="contformain">
        <div className="sliper">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper.current }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2">
            <SwiperSlide>
              {' '}
              <img src={p1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={p2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={p3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <img src={p4} alt="" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={(swiper) => (thumbsSwiper.current = swiper)}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper">
            <SwiperSlide
              onClick={() => swiperFunc(1)}
              className={swiper === 1 ? 'active-slide' : ''}>
              {' '}
              <img src={p1} alt="" />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => swiperFunc(2)}
              className={swiper === 2 ? 'active-slide' : ''}>
              {' '}
              <img src={p2} alt="" />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => swiperFunc(3)}
              className={swiper === 3 ? 'active-slide' : ''}>
              {' '}
              <img src={p3} alt="" />
            </SwiperSlide>
            <SwiperSlide
              onClick={() => swiperFunc(4)}
              className={swiper === 4 ? 'active-slide' : ''}>
              {' '}
              <img src={p4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="infoabout">
          <h1>RealmeC33</h1>
          <p className="price">Rp 1898.000 </p>
          <p className="color">Color</p>
          <div className="contforcolor">
            <ul className="list-color">
              {color.map((value) => (
                <li
                  key={value.id}
                  onClick={() => colorFunc(value.id)}
                  className={colorClick === parseInt(value.id) ? 'active-color' : 'showcolor'}>
                  <img src={value.url} alt="" /> <p>{value.title}</p>{' '}
                </li>
              ))}
            </ul>
          </div>
          <div className="konfig">
            <h1 className="conf">Configuration</h1>
            <ul className="forConf">
              <li
                onClick={() => confFunc(1)}
                className={confClick === 1 ? 'active-config' : 'config'}>
                3+32 GB
              </li>
              <li
                onClick={() => confFunc(2)}
                className={confClick === 2 ? 'active-config' : 'config'}>
                4+128 GB
              </li>
            </ul>
          </div>
          <h1 className="Units">Unit</h1>
          <div className="unit">
            <button onClick={mathFuncMin} className="minus">
              -
            </button>
            <p className="schet">{mathClick}</p>
            <button onClick={mathFuncPl} className="plus">
              +
            </button>
          </div>

          <div className="btncont">
            <button className="specchek">Basket</button>
            <button className="BN">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
