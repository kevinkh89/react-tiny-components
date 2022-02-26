import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import TopLayer from './assets/topLayer.png';
const PriceCard = ({ special, className, children, ...props }) => {
   return (
      // <div className="price-card-wrapper">
      <div className={`${className} price-card ${special && 'special'} `} {...props}>
         {special && <img src={TopLayer} />}
         {children}
      </div>
   );
};

const PriceCardCta = ({ className, ...props }) => {
   return (
      <button className={`cta ${className}`} {...props}>
         choose plan
      </button>
   );
};

const PriceCardTitleSection = ({ Icon, title, subtitle, price, className, ...props }) => {
   return (
      <div className={`price-title-section ${className}`} {...props}>
         <div className="price-title">
            {/* <img src={Diamond} /> */}
            <Icon />
            <div className="price-title-desc">
               <p>{title}</p>
               <p>{subtitle}</p>
            </div>
         </div>
         <div className="price-amount">{price}</div>
      </div>
   );
};

const PriceCardDescSetion = ({ list, Icon, className, ...props }) => {
   return (
      <div className={`price-desc-section ${className}`} {...props}>
         <ul>
            {list.map((item, index) => (
               <li key={index}>
                  <Icon />
                  <span>{item}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

PriceCard.title = PriceCardTitleSection;
PriceCard.desc = PriceCardDescSetion;
PriceCard.cta = PriceCardCta;
export default PriceCard;
