import './Cards.css';
// import BodyComponent from './BodyComponent';
// import restaurantsList from './data/res.json';
// import { useState } from 'react';


const RestaurantCards = ({ cloudinaryImageId, name, area }) => { 
    return (
        <>
            <div className='card'>
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt='food_image' />
                <h3>{name}</h3>
                <p>{area}</p>
            </div>
        </>
    );
};

export default RestaurantCards;
