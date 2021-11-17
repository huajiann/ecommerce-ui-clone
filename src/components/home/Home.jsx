import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import CarouselHeader from "./carousel/CarouselHeader";
import * as BiIcons from 'react-icons/bi';
import Countdown from "./Countdown/Countdown";
import Card from "./Card";
import CouponsCard from "../CouponsCard";


export const Home = () => {
  const [popup, setPopup] = useState();


  return (
    <div className="mainContent">
      <Navbar/>
      <main className="mainContent">
        <CarouselHeader/>
        <section className="main__segment">
          <div className="main__flashsale">
          <BiIcons.BiBoltCircle className="main__lightning"/>
          <h1 className="main__flashtitle">FLASH SALE:</h1>
          <Countdown/>
          </div>
          <Card/>
        </section>
        <section className="main__segment" style={{alignItems: "flex-end"}}>
          <a href="#" className="main__expand">More Voucher</a>
          <CouponsCard/>
        </section>
        <section className="main__segment">
          <div className="main__products">
          <ul className="main__tabs">
            <li className="main__items">
              <h2 className="items__name">Best Seller</h2>
            </li>
            <li className="main__items">
              <h2 className="items__name">New Products</h2>
              <div className="items__underline"></div>
            </li>
          </ul>  
          <a href="#" className="main__expand">All Products</a>
          </div>
          <Card/>
        </section>
      </main>
    </div>
  );
};
