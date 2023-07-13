import { IMG_CDN_URL, restrauntList } from "../config";
// config driven ui : as it is driven by api and backend

// instead of writing props we can destructure it which is called as destructuring so there is no need of using props word again and again
const RestrauntCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwoString,
  sla,
}) => {
  //   we can destructure the given data also
  //   const {} = restraunt.data;

  //   const { deliveryTime } = restraunt.data.sla;

  return (
    <div className="card">
      <img
        style={{ borderRadius: "0.4rem" }}
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt="Card Image"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>
        {avgRating} stars | {sla.deliveryTime} min | {costForTwoString}
      </p>
      {
        // we can not do this bec it only accept js expression not the statements
        // a = 10 ;
        // console.log(a);
        ((a = 10), console.log(a))
      }
    </div>
  );
};

const RestrauntCards = () => {
  return (
    <>
      {/* <h4>rendering using props </h4> */}

      {/* <RestranuntCard restraunt={restrauntList[0].data}></RestranuntCard> */}
      {/* <RestranuntCard {...restrauntList[0].data}></RestranuntCard> */}
      {restrauntList.map((restaurant) => {
        return (
          <RestranuntCard
            {...restaurant.data}
            key={restaurant.data.id}
          ></RestranuntCard>
        );
      })}

      {/* <h4>mapping using .map() technique </h4> */}
      {/* {restrauntList.map((restraunt) => {
          return (
            <div className="card">
              <img
                style={{ borderRadius: "0.4rem" }}
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  restraunt.data.cloudinaryImageId
                }
                alt="Card Image"
              />
              <h2>{restraunt.data?.name}</h2>
              <h3>{restraunt.data?.cuisines.join(", ")}</h3>
              <p>
                {restraunt.data?.avgRating} stars |{" "}
                {restraunt.data.sla.deliveryTime} min |{" "}
                {restraunt.data?.costForTwoString}
              </p>
            </div>
          );
        })} */}
    </>
  );
};
export default RestrauntCard;
