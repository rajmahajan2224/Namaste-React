import { CDN_URL } from "../utils/constant";

const RestroCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, avgRating, name, costForTwo, deliveryTime, cuisines} = resData?.data.data;
  
      return (
          <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo / 100} For Two</h4>
            <h4>{deliveryTime} min</h4>
          </div>
      );
  };
  
  export default RestroCard;