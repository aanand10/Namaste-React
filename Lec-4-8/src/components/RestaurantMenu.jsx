import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { Shimmer } from "./Shimmer";
import L from "leaflet";

const RestaurantMenu = () => {
  // can be done as
  // const params = useParams();
  // console.log(params);
  // const { id } = params; destructured way

  // can be done as by destructuring on the fly also it is the way to read dynamic url params
  const { id } = useParams();
  const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.075594383552563&lng=72.87402527136538&restaurantId=${id}`;
  const [items, setItems] = useState([]);
  const [restroInfo, setRestroInfo] = useState([]);

  useEffect(() => {
    getRestaurantsInfo();
  }, []);
  async function getRestaurantsInfo() {
    const data = await fetch(url);
    const json = await data.json();
    setItems(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
    setRestroInfo(json?.data?.cards[0]?.card?.card?.info);
  }

  const idOfItem = items?.card?.info?.id;
  console.log("restro info", restroInfo);
  console.log("items ", items);
  // const { name } = { ...items[0]?.card?.info };
  const {
    name,
    city,
    areaName,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    totalRatingsString,
    costForTwoMessage,
  } = restroInfo;

  // console.log(latLong, "latLong");
  const restroImage = IMG_CDN_URL + cloudinaryImageId;

  useEffect(() => {
    // Create map instance
    const latLong = restroInfo?.latLong;
    console.log(latLong, "latLong");
    // const [latitude, longitude] = latLong?.split(",")?.map(parseFloat);

    // // Create map instance
    // const map = L.map("map").setView([latitude, longitude], 13);

    // // Add a tile layer (for example, OpenStreetMap)
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
    //   map
    // );

    // // Add a marker
    // L.marker([latitude, longitude]).addTo(map);
  }, []);

  return (
    <>
      <div className="flex pt-2">
        <div className="hotelInfo flex flex-col-reverse w-max p-4 justify-center">
          <div className=" border border-1 rounded-2xl p-4 ">
            <img
              className="h-[12rem] rounded-xl"
              src={restroImage}
              alt=""
              srcset=""
            />
          </div>
          <div className="flex flex-row justify-between  my-10 p-2 items-center">
            <div className="text-left ">
              <div>
                <h1 className="text-xl font-semibold ">{name}</h1>
                <p className="text-sm text-slate-700 font-normal">
                  {cuisines?.join(" , ")}
                </p>
                <p className="text-sm text-slate-700 font-normal">
                  {city}/{areaName}
                  &nbsp; {sla?.lastMileTravelString}
                </p>
              </div>

              <div className="mt-5">
                <p className=" font-semibold">{costForTwoMessage}</p>
              </div>
            </div>

            <div className="p-2 border border-slate-600  rounded-xl h-16 flex items-center flex-col ">
              <p className=" text-xl font-semibold text-green-700">
                {avgRating}
              </p>
              <p className="text-xs text-slate-400">{totalRatingsString}</p>
            </div>
          </div>
        </div>

        <div className="grow h-[80vh] overflow-y-auto">
          <div className="w-full sticky top-0 bg-white">
            <h1 className="sticky top-0 text-2xl text-center font-semibold">
              Menu
            </h1>
          </div>
          <div className="flex justify-center items-center flex-col gap-4">
            {items?.map((item, index) => {
              const {
                name,
                id,
                defaultPrice,
                description,
                imageId,
                price,
                itemAttribute,
              } = item?.card?.info;
              const imgUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`;

              return (
                <div
                  key={index}
                  className="flex flex-row w-[70%] border  justify-between items-center p-4  rounded-xl"
                >
                  <div>
                    <div
                      className={`h-4 w-4 border-2 flex justify-center items-center ${
                        itemAttribute.vegClassifier === "VEG"
                          ? "border-green-700"
                          : "border-red-700"
                      }`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          itemAttribute.vegClassifier === "VEG"
                            ? "bg-green-700"
                            : "bg-red-700"
                        }`}
                      ></div>
                    </div>

                    <h4 className="font-medium">{name}</h4>
                    <h5>
                      ₹{" "}
                      {defaultPrice
                        ? parseFloat(defaultPrice / 100)
                        : parseFloat(price / 100)}
                    </h5>

                    <p className="mt-3 text-slate-600 text-sm w-[30vw]">
                      {description}
                    </p>
                  </div>

                  <img
                    className="w-[8rem] h-auto rounded-xl"
                    src={imgUrl}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantMenu;
