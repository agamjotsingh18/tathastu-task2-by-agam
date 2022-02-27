import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Project CodeSetGo Official Website'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Project PollItUp'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Project Hostel Management Dashboard'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Project Eco-lution'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Project Covid Tracker'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;