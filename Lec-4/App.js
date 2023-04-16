import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./Logo.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
{
  /* 
    Header
        - Logo
        - Nav items 
        - Cart
    Body 
        - SearchBar
        - RestranuntList
            - RestranuntCard 
                - Image
                - Name
                - Rating
                - Cusines tags (chinese , north indian , south indian )
    Footer        
        - Reff. links
        - copy right
    */
}

const Title = () => {
  return (
    <>
      <div className="logoBox">
        <a href="#">
          <img className="logo" src={logo} alt="logo" />
          <h1>Food Villa</h1>
        </a>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

// config driven ui : as it is driven by api and backend
const restrauntList = [
  {
    name: "Pizza Hut",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ayqtvkomtuodydvkaemm",
    cusines: ["Pizza ", "Italian"],
    rating: "4.1",
  },
  {
    name: "Campus choice",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rrasdidblyglozoumzwy",
    cusines: ["Fast Food", "Pizzas", "Beverages", "Desserts"],
    rating: "3.8",
  },
  {
    name: "Burger King",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/28fb13049b4e55297bb3f703cde63c35",
    cusines: ["Burger", "American"],
    rating: "4.0",
  },
];

const restrauntRealData = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "285846",
      name: "Divtya Budhlya Machi",
      uuid: "604dc302-499f-415a-9318-bac8adce191d",
      city: "41",
      area: "Chandak Circle",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "gklch36nunwa0d6t9ogy",
      cuisines: ["North Indian", "Biryani"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "divtya-butalaya-machi-college-road-college-road",
        city: "nashik",
      },
      cityState: "41",
      address: "chandak circle nashik",
      locality: "Chandak Road",
      parentId: 73493,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6503022~p=1~eid=00000187-8957-abbf-1801-6bf300b1017d",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "285846",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.8",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "697245",
      name: "Subway",
      uuid: "00b2dd9c-86e9-4a00-8dd6-f72b250defe2",
      city: "41",
      area: "City Centre",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "2208bdaa6ebe346063fa1383632fcc31",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 27,
      minDeliveryTime: 27,
      maxDeliveryTime: 27,
      slaString: "27 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "subway-lawate-nagar-nas_college-road",
        city: "nashik",
      },
      cityState: "41",
      address:
        "EVERSUB INDIA PVT LTD (SUBWAY) City Centre Mall, F& B :-3A, Lawate nagar, Utwadi Road, Nashik. Maharashtra 422002",
      locality: "Lawate nagar",
      parentId: 2,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6509844~p=4~eid=00000187-8957-abbf-1801-6bf400b10435",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "697245",
        deliveryTime: 27,
        minDeliveryTime: 27,
        maxDeliveryTime: 27,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.4",
      totalRatings: 20,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "236456",
      name: "Pizza Hut",
      uuid: "7ec65e00-44ce-4275-8cea-7c68814f7616",
      city: "41",
      area: "College Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "ayqtvkomtuodydvkaemm",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 2.200000047683716,
      slugs: {
        restaurant: "pizza-hut-nashik-college-road",
        city: "nashik",
      },
      cityState: "41",
      address:
        "Ground Floor, metro  99 off.college road  Plot no 456 Thatte Nagar , Nashik -422005",
      locality: "Collage Road \n",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "236456",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 2.200000047683716,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "93050",
      name: "Parivar Nasta And Dosa Point",
      uuid: "44672123-0419-45c7-bbd8-f0892dc21fe7",
      city: "41",
      area: "Mahatma Nagar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "lte5mt7ebzzzwp7untjh",
      cuisines: ["Chinese", "South Indian", "Pizzas"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: "18 MINS",
      lastMileTravel: 0.4000000059604645,
      slugs: {
        restaurant: "parivar-nasta-and-dhosa-point-college-road-college-road",
        city: "nashik",
      },
      cityState: "41",
      address:
        "parivar nasta and dhosa point, Mahatma Nagar, Parijat Nagar, Nashik, Maharashtra 422005",
      locality: "Mahatma Nagar",
      parentId: 230935,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "93050",
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 0.4000000059604645,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "178433",
      name: "Mughal Darbar",
      uuid: "f6d16e13-4fe9-456d-995b-6b3fc53b657e",
      city: "41",
      area: "Doodh Bazar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "b71y9hrz4a1rizj2zzhe",
      cuisines: ["North Indian", "Ice Cream", "Biryani"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "mughal-darbar-doodh-bazaar-bombay-naka",
        city: "nashik",
      },
      cityState: "41",
      address: "Doodh Bazaar, Nashik",
      locality: "Bhadrakali",
      parentId: 8892,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹350 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹150 on orders above ₹350 | Use code JUMBO",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6502998~p=7~eid=00000187-8957-abbf-1801-6bf500b10744",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "178433",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];

// instead of writing props we can destructure it which is called as destructuring so there is no need of using props word again and again
const RestranuntCard = ({
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
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
        alt="Card Image"
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <p>
        {avgRating} stars | {sla.deliveryTime} min | {costForTwoString}
      </p>
    </div>
  );
};

const RestrauntCards = () => {
  return (
    <>
      {/* <h4>rendering using props </h4> */}

      {/* <RestranuntCard restraunt={restrauntRealData[0].data}></RestranuntCard> */}
      {/* <RestranuntCard {...restrauntRealData[0].data}></RestranuntCard> */}
      {restrauntRealData.map((restaurant) => {
        return (
          <RestranuntCard
            {...restaurant.data}
            key={restaurant.data.id}
          ></RestranuntCard>
        );
      })}

      {/* <h4>mapping using .map() technique </h4> */}
      {/* {restrauntRealData.map((restraunt) => {
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

const Body = () => {
  return (
    <div className="cardContainer">
      <RestrauntCards />
    </div>
  );
};

// creating an obj for style
// const styleObj = {
//   backgroundColor: "red",
// };
const Footer = () => {
  return <h2>Footer</h2>;
};
// React.Fragment is a component which is exported by react
// jsx can only have one parent
// if i want to have two parents so instead of using ugly and unnecessary div we can use React.Fragment which is a componenet exported by react
// React.Fragment is like a empty Tag , we can write it like <></>
const AppLayout = () => {
  return (
    <>
      <Header />
      <>
        <Body />
      </>
      <Footer />
    </>
  );
};

root.render(<AppLayout />);
