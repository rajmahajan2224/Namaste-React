import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.555826&lng=77.220136&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    
    setListOfResturant(json.data.cards.card);
  };

  // Conditional Rendering
  
  if(listOfResturants.length === 0) {
    return <Shimmer />;
  }

    return (
        <div className="body">
          <div className="filter">
            <button className="filter-btn" onClick={() => {
              const filteredList = listOfResturants.filter((res) => res.data.data.avgRating > 4);
              setListOfResturant(filteredList);
            }}
            >
            Top Rated Resturant</button> 
          </div>
          <div className="res-container">
             {
              listOfResturants && listOfResturants.map((restaurant) => (<RestroCard key = {restaurant.data.data.id} resData = {restaurant} />))
             }
          </div>
        </div>
    );
};

export default Body;