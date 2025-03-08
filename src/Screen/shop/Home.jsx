import data from "../../data.json";

const Home = () => {
  const handleCart = (product) => {
    const cartItem = JSON.parse(localStorage.getItem("cartProduct")) || [];
    cartItem.push(product);
    localStorage.setItem("cartProduct", JSON.stringify(cartItem));
    window.location.href = "/";
    alert("Item added to cart.");
  };

  return (
    <>
      <div className="container home mt-3 py-3">
        <div
          id="carouselExampleAutoplaying"
          className="carousel carousel-dark  slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://icms-image.slatic.net/images/ims-web/2b8cc51c-7dad-421a-bca1-786a525bdfc0.jpg_1200x1200.jpg"
                className="d-block w-100 carimg"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="	https://icms-image.slatic.net/images/ims-web/08d53058-4c36-4ade-b041-fce14977cdb3.jpg"
                className="d-block w-100 carimg"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://icms-image.slatic.net/images/ims-web/0f2b854c-e356-4754-8be8-62c4c300a6fe.jpg"
                className="d-block w-100 carimg"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="row mt-3">
          {data.product.map((product) => (
            <div className="col-lg-4 col-md-6 my-2" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top p-3 cardimg" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h5>Price : {product.price}$</h5>
                  <h5>
                    Rating : {product.rating}
                    <i className="fa-solid fa-star fa-xs"></i>
                  </h5>
                  <a
                    onClick={() => handleCart(product)}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
