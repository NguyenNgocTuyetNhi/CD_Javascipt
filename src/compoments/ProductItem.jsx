const ProductItem = () => {
  return (
    <div class="card mb-4">
      <div className="card-image">
        <a href="#" className="card-image__link">
          <img
            src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="card-image__thumb"
          />
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">Tên sản phẩm</h5>
        <div className="price-box d-flex align-items-center justify-content-between mb-2">
          <span className="price">100.000đ</span>
          <span className="sale-price">
            <del>120.000đ</del>
          </span>
        </div>
        <a href="#" class="btn btn-primary">
          Mua ngay
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
