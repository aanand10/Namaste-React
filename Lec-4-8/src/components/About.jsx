import Header from "./Header";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

const About = () => {
  return (
    <>
      <Outlet />
      <h1>This is an about page</h1>
      <ProfileFunctionalComponent name={"Anand"} />
      <ProfileClass name={"Anand Class"} />
    </>
  );
};
export default About;
