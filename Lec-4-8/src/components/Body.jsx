import RestrauntCard from "./RestrauntCard";
import { useState, useEffect, useDeferredValue } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurants) {
  console.log(searchTxt);
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchTxt.toLowerCase());
  });
  console.log(filterData, "filterData");

  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const deferredFilteredRestraunts = useDeferredValue(filteredRestraunts);

  console.log(filteredRestraunts, "filteredRestraunts");

  useEffect(() => {
    async function getRestraunt() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.075594383552563&lng=72.87402527136538&page_type=DESKTOP_WEB_LISTING"
        //19.075594383552563, 72.87402527136538
        //18.933266165746186, 72.82782328192839
      );
      const JSON = await data.json();
      console.log(JSON);
      // optional chaining
      console.log(
        JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // setRestaurants(JSON?.data?.cards[2]?.data?.data?.cards);
      setRestaurants(
        JSON?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    getRestraunt();
  }, []);

  useEffect(() => {
    const filterEdData = restaurants?.filter((restraunt) => {
      return restraunt.info.name
        .toLowerCase()
        .includes(searchTxt.toLowerCase());
    });

    console.log(filterEdData, "filterEdData");
    setFilteredRestraunts(filterEdData);
  }, [searchTxt]);
  // early return
  if (!restaurants) return null;
  return (
    <>
      <div className="search-container mt-2">
        <input
          type="text"
          className="search-input px-2 w-full"
          placeholder="Kaha se khana h"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <h4>{deferredFilteredRestraunts?.length}</h4>

        {/* <button
          className="search-btn  py-1 px-2"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchTxt, restaurants);

            // update the state of the restaraunt variable
            setFilteredRestraunts(data);
          }}
        >
          Search
        </button> */}
      </div>
      <div className="cardContainer">
        {console.log(
          "deferredFilteredRestraunts jsx",
          deferredFilteredRestraunts
        )}

        {deferredFilteredRestraunts?.length !== 0 ? (
          deferredFilteredRestraunts.map((restaurant) => {
            return (
              <>
                <RestrauntCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                ></RestrauntCard>
              </>
            );
          })
        ) : deferredFilteredRestraunts?.length === 0 && searchTxt !== "" ? (
          <h1>Nahi mila bhai dusra search kro..</h1>
        ) : restaurants?.length !== 0 ? (
          restaurants.map((restaurant) => {
            return (
              <>
                <RestrauntCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                ></RestrauntCard>
              </>
            );
          })
        ) : searchTxt == "" ? (
          <Shimmer />
        ) : null}
      </div>
    </>
  );
};

export default Body;
