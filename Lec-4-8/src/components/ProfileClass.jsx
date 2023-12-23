//class based component are at the end of the these are the js classes
import React from "react";
class ProfileClass extends React.Component {
  // assignment
  constructor(props) {
    // constructor is used for initialisation
    super(props);
    // this is the best place to create state
    //creating state in the class based component
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    // must required method for the class based component
    // this is returning a piece of the jsx

    const { count, count2 } = this.state; // destructuring
    return (
      <>
        <h2>Class based Profile Component </h2>
        <h3>name :{this.props.name} </h3>
        <h2>count : {count}</h2>
        {/* way of passing props  */}
      </>
    );
  }
}
export default ProfileClass;
