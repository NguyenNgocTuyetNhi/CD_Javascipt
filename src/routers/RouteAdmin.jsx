import Contact from "../pages/Contact";
import Banner from "../pages/backend/Banner";
import Brand from "../pages/backend/Brand";
import Category from "../pages/backend/Category";
import Menu from "../pages/backend/Menu";
import Order from "../pages/backend/Order";
import OrderDetail from "../pages/backend/OrderDetail";
import Post from "../pages/backend/Post";
import Product from "../pages/backend/Product";
import Topic from "../pages/backend/Topic";
import User from "../pages/backend/User";

const RouteAdmin = [
  {
    path: "banner",
    element: <Banner />,
  },
  {
    path: "brand",
    element: <Brand />,
  },
  {
    path: "category",
    element: <Category />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "menu",
    element: <Menu />,
  },
  {
    path: "product",
    element: <Product />,
  },
  {
    path: "post",
    element: <Post />,
  },
  {
    path: "order",
    element: <Order />,
  },
  {
    path: "orderdetail",
    element: <OrderDetail />,
  },
  {
    path: "user",
    element: <User />,
  },
  {
    path: "topic",
    element: <Topic />,
  },
];

export default RouteAdmin;
