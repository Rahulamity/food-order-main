import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  const [username, setUserName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.78218441280971&lng=86.21543090400911&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("rahul.......", json);

    setListOfRestraunt(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  if (!onlineStatus)
    return (
      <div className="bg-red-100 p-4">
        <p className="text-red-700">
          Looks like you're offline! Please check your internet connection.
        </p>
      </div>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 p-4">
      <div className="flex flex-row flex-wrap justify-between">
  <div className="search flex flex-row items-center m-4 p-4">
    <input
      type="text"
      className="w-64 border border-black p-2 rounded-lg"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder="Search Restaurants"
    />
    <button
      className="px-8 py-2  bg-green-500 text-white rounded-lg hover:bg-green-600"
      onClick={() => {
        const filteredRestaurant = listOfRestaurants.filter((res) =>
          res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestaurant(filteredRestaurant);
      }}
    >
      Search
    </button>
  </div>
  <div className="search flex flex-row items-center m-4 p-4">
    <button
      className="px-4 py-2 font-bold text-lg bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400"
      onClick={() => {
        const filteredList = listOfRestaurants?.filter(
          (res) => res.info.avgRating > 4
        );
        setFilteredRestaurant(filteredList);
      }}
    >
      Top Rated Restaurants
    </button>
  </div>
  <div className="search flex flex-row items-center m-4 p-4">
    <label className="mr-2 font-bold text-lg">Username: {username}</label>
    <input
      className="border border-black p-2 rounded-lg"
      value={username}
      onChange={(e) => setUserName(e.target.value)}
      placeholder="Enter Username"
    />
  </div>
</div>

      <div className="flex flex-wrap justify-around">
        {filteredRestaurant && filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {restaurant.info.avgRating > 4 ? (
                <RestaurantCardPromoted resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          ))
        ) : (
          <p className="text-gray-600">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
