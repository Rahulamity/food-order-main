import { CDN_URL } from "../Utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime },
  } = resData;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
      <img
        className="rounded-lg h-48 w-full object-cover"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="text-gray-500">{cuisines.join(", ")}</h4>
      <h4 className="text-blue-400">{avgRating} stars</h4>
      <h4 className="text-green-500">{costForTwo}</h4>
      <h4 className="text-black-500">{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div className="relative">
        <label className="absolute top-0 right-0 bg-black text-white m-2 p-2 rounded-lg">Top Rated</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
