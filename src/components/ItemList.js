import React from "react";
import { CDN_URL } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="grid grid-cols-1 gap-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 border-gray-200 border-2 rounded-lg shadow-lg flex justify-between bg-white"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-bold text-lg">
                {item.card.info.name}({item.card.info.inStock})
              </span>
              <span className="ml-2 text-green-500">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
                <p className="font-bold text-lg text-gray-500">
                  {/* {item.card.info.offerTags?.title} */}
                </p>
              </span>
            </div>
            <p className="text-xs text-gray-500 ">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4 relative">
            <button
              className="p-2 absolute top-0 right-0 bg-blue-500 text-white rounded-lg shadow-lg"
              onClick={() => handleAddCart(item)}
            >
              Add +
            </button>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
