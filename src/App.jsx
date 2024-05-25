import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useRoutes } from "react-router-dom";
import NoPage from "./pages/NoPage";
import LayoutSite from "./layout/LayoutSite";
import RouteApp from "./routers";
import LayoutAdmin from "./layout/LayoutAdmin";

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <LayoutSite />,
      children: RouteApp.RouteSite,
    },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: RouteApp.RouteAdmin,
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ]);

  return element;
}
export default App;
