import { FaYoutube, FaGoogle, FaFacebook, FaInstagram } from "react-icons/fa";
import React from "react";
const Footer = () => {
    return (
      <div className="bg-light">
        <section class="hdl-footer pb-4">
          <div class="footer_container">
            <div class="row">
              <div class="col-md-4 pt-4">
                <h3 class="widgettilte">CHÚNG TÔI LÀ AI ?</h3>
                <p class="pt-1">
                  <i>
                    {" "}
                    Copyright@ hiện đang là đối tác phân phối chiến lược tại thị
                    trường Việt Nam.
                  </i>
                </p>
                <p class="pt-1">
                  Địa chỉ: 79, ĐS 6, P.Phước Long B ,Q9,TP. Thủ Đức
                </p>
                <p class="pt-1">Điện thoại: 0774669214 (call, zalo) - Email:</p>
                <h3 class="widgettilte">MẠNG XÃ HỘI</h3>
                <div class="social my-3">
                  <FaFacebook />
                  <FaInstagram />
                  <FaGoogle />
                  <FaYoutube />
                </div>
              </div>
              <div class="col-md-4 pt-4">
                <h3 class="widgettilte">
                  <strong>Liên hệ</strong>
                </h3>
              </div>
              <div class="col-md-4 pt-4 text-end">
                <h3 class="fs-5 text-end">
                  <strong>Lượt truy cập</strong>
                </h3>
<p class="my-1">9999 lượt</p>
              </div>
            </div>
          </div>
        </section>
        <section class="dhl-copyright bg-dark py-3">
          <div class="container text-center text-white">
            Thiết kế bởi:Nguyen Ngoc Tuyet Nhi- Phone:0774669214
          </div>
        </section>
      </div>
     );
    };
export default Footer