/** 
  All of the routes for the Vision UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Vision UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Vision UI Dashboard React icons
import { IoLogOut, IoRocketSharp } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBuild } from "react-icons/io5";
import { BsCreditCardFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

const Logout = () => {
  localStorage.removeItem("user");
};

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <IoHome size="15px" color="inherit" />,
    component: Dashboard,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Transactions",
    key: "transactions",
    route: "/transactions",
    icon: <IoStatsChart size="15px" color="inherit" />,
    component: Tables,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    route: "/billing",
    icon: <BsCreditCardFill size="15px" color="inherit" />,
    component: Billing,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   route: "/rtl",
  //   icon: <IoBuild size="15px" color="inherit" />,
  //   component: RTL,
  //   noCollapse: true,
  // },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: Profile,
    noCollapse: true,
  },

  {
    type: "collapse",
    name: "",
    key: "Logout",
    route: "/dashboard",
    // icon: <IoLogOut size="15px" color="inherit" onClick={() => localStorage.removeItem("user")} />,
    icon: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          background: "#1a1f37",
          borderRadius: "12px",
          width: "120px",
        }}
        onClick={() => localStorage.removeItem("user")}
      >
        <IoLogOut size="15px" color="inherit" />
        <span style={{ marginLeft: "5px", color: "white", fontSize: "14px", marginLeft: "20px" }}>
          Logout
        </span>
      </div>
    ),
    component: null,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   route: "/authentication/sign-in",
  //   icon: <IoRocketSharp size="15px" color="inherit" />,
  //   component: SignUp,
  //   noCollapse: true,
  // },
];

export default routes;
