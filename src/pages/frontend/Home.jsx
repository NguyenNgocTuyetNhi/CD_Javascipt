import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ChinhSachItem from "../../compoments/ChinhSachItem.jsx";
import Product from "../../compoments/ProductItem.jsx";
import { FaBell } from "react-icons/fa";
import Slider from "../../compoments/Silder.jsx";
import ProductItem from "../../compoments/ProductItem.jsx";
import Contact from "../frontend/Contact.jsx";
import Header from "../../compoments/Header.jsx";
import Footer from "../../compoments/Footer.jsx";
const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Slider />

        <div>
          <h1 className="text-center mt-3">Sản phẩm mới</h1>
          <div className="row">
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center mt-3">Sản phẩm bán chạy</h1>
          <div className="row">
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
            <div className="col-md-3">
              <ProductItem />
            </div>
          </div>
        </div>
      </main>
      <div className="ChinhSach">
        <div className="row">
          <div className="col-md-3">
            <ChinhSachItem
              image="https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_2.png?1710404714890"
              alt="chinhsach1"
              title="Miễn Phí Vận Chuyển"
              des="Cho đơn hàng từ 500k"
            />
          </div>
          <div className="col-md-3">
            <ChinhSachItem
              image="https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_1.png?1710404714890"
              alt="chinhsach1"
              title="Đa dạng mẫu mã"
              des="+5000 sản phẩm"
            />
          </div>
          <div className="col-md-3">
            <ChinhSachItem
              image="https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_3.png?1710404714890"
              alt="chinhsach1"
              title="Thanh toán COD"
              des="hoặc thanh toán quét mã QR"
            />
          </div>
          <div className="col-md-3">
            <ChinhSachItem
              image="https://bizweb.dktcdn.net/thumb/compact/100/508/659/themes/939030/assets/thumb_service_4.png?1710404714890"
              alt="chinhsach1"
              title="Quà tặng thành viên "
              des="Nhanh tay đăng kí"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default Home;
