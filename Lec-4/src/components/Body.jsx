import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";

function filterData(searchTxt, restaurants) {
  console.log(searchTxt);
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchTxt.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState(" "); // to create state variables , return array =[variable name  , function to update the variable]
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  useEffect(() => {
    getRestraunt();
  }, []);

  async function getRestraunt() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.075594383552563&lng=72.87402527136538&page_type=DESKTOP_WEB_LISTING"
      //19.075594383552563, 72.87402527136538
    );
    const JSON = await data.json();
    console.log(JSON);
    // optional chaining
    setRestaurants(JSON?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunts(JSON?.data?.cards[2]?.data?.data?.cards);
  }
  useEffect(() => {
    console.log("working");
    filterData(searchTxt, restaurants);
  }, [searchTxt]);
  // early return
  if (!restaurants) return null;
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input px-2 "
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        
        <button
          className="search-btn  py-1 px-2"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchTxt, restaurants);
            // update the state of the restaraunt variable
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="cardContainer">
        {filteredRestraunts?.length !== 0 ? (
          filteredRestraunts.map((restaurant) => {
            return (
              <RestrauntCard
                {...restaurant.data}
                key={restaurant.data.id}
              ></RestrauntCard>
            );
          })
        ) : searchTxt == " " ? (
          <h1>shimmer ui loading</h1>
        ) : (
          <h1>Item Not found search for another item</h1>
        )}
      </div>
    </>
  );
};

export default Body;
