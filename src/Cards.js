import './Cards.css';
import dat from './data/res.json';
import BodyComponent from './BodyComponent';

const RestaurantCards = () => {
    return (
        <div id='RestaurantCards'>
            {
                dat.restauList.map((resta) => {
                    return <BodyComponent {...resta.data} />
                })
            }
            {/* Other ways for reference
            <BodyComponent {...dat.restauList[0].data}
            <BodyComponent restaurant={dat.restauList[0].data} /> 
            */}
        </div>
    );
};

export default RestaurantCards;