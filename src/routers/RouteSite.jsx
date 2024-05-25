import Products from "../compoments/ProductItem";
import Contact from "../pages/frontend/Contact"
import Home from "../pages/frontend/Home"
import ProductDetail from "../pages/frontend/ProductDetail";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";

const RouterSite=[
    {index:true,element:<Home/>},
    {path:"lien-he",element:<Contact/>},
    {path:"san-pham",element:<Products/>},
    {path:"danh-muc/:slug",element:<ProductCategory/>},
    {path:"thuong-hieu/:slug",element:<ProductBrand/>},
    {path:"san-pham/:slug",element:<ProductDetail/>},

];
export default RouterSite;