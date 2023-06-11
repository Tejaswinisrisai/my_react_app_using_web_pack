// import React from "React";
// import dat from './data/res.json';
import './BodyComponent.css';

//fetching name area and city and image


// const tempdata = {
//     image: "qems028i3da5rxf81rbp",
//     name: 'Mefil',
//     city: 'Hyderabad',
//     area: 'kacheguda'
// };
// const BodyComponent = (props) => {
// const BodyComponent = ({restaurant}) => {
const BodyComponent = ({cloudinaryImageId, name, area}) => {
    // const {cloudinaryImageId, name, area} = restaurant;
    return (
        
        <div className='card'>
            
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt='food_image' />
            <h3>
                {name}
                {/* {restaurant.name} - left for reference*/}
                {/* {props.restaurant.name} - left for reference*/}
            </h3>
            <p>
                {area}
            </p>
        </div>
    );
};

export default BodyComponent;




































// function Bod(){
//     const bujji=dat.restList[0].data;
//     return (
//         <div>
//         {/* {console.log(bujji)} */}
//         <h1>{bujji.id}</h1>
//         <p>{bujji.city}</p>
//         <p>{bujji.name}</p>
//         </div>
//     );
// };export default Bod;

