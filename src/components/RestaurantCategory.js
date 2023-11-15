import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, setcategoryIndex, categoryIndex }) => {
  const [clicked, setClicked] = useState(false);
  const [showList, setShowList] = useState(true);

  const onTitleClick = () => {
    setClicked(!clicked);
    setShowList(!showList);

    // If you want to set the categoryIndex, do it here
    setcategoryIndex(clicked ? null : categoryIndex);
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={onTitleClick}>
        <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})
        </span>
        <span>{clicked ? '⬆️' : '⬇️'}</span>
      </div>
      {showList && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;

