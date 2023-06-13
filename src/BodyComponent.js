import RestaurantCards from './Cards';
import restaurantsList from './data/res.json';
import { useState } from 'react';
import './BodyComponent.css';

const restaurantListArr = restaurantsList.restauListArray;

function filterData(inputSearch, restaurantList) {
    // const restauarray = restaurantList.restauListArray;


    const filteredArray=restaurantList.filter(item=>
        {
            const str=JSON.stringify(item);
            console.log("item",item);
            console.log("str",str);
            const item_lower=str.toLowerCase();
            const input_lowerr=inputSearch.toLowerCase();
            return item_lower.includes(input_lowerr);
        }       
        );

        // console.log(filteredArray)
        return filteredArray;
    
}
const BodyComponent = () => {
    const [inputSearch, setInputSearch] = useState("");
    const [restaurantList, setRestaurantList] = useState(restaurantListArr);

    return (
        <>
            <div id='SearchCmpnt'>
                <input
                    type='text'
                    className='searchBar'
                    placeholder='Search'
                    value={inputSearch}
                    onChange={(event) => {
                        setInputSearch(event.target.value);
                        const data = filterData(event.target.value,restaurantListArr);
                        setRestaurantList(data);
                    }}
                />
                <button
                    className='searchButton'
                    onClick={() => {
                        const data = filterData(inputSearch, restaurantListArr);
                        // console.log(data);
                        setRestaurantList(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div id='RestaurantCards'>
                {
                    restaurantList.map((resta) => {
                        return <RestaurantCards {...resta.data} />
                    })
                }
            </div>
        </>
    )
}

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

