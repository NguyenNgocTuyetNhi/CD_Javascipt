import React from "react";
import Header from "../../compoments/Header";
import MainDetail from "../../compoments/mainDetail";
import Footer from "../../compoments/Footer";
const ProductDetail = () => {
  return (
    <>
      <Header />
      <section className="bg-light">
        <div className="container">
          <nav
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb"
          >
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="index.php">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {/* main */}
              </li>
            </ol>
          </nav>
        </div>
      </section>
      {/* main */}
      <div className="Main">
        <MainDetail />
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
