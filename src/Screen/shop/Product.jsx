import data from "../../data.json";

const Product = () => {
  const handleCart = (product) => {
    const cartItem = JSON.parse(localStorage.getItem("cartProduct")) || [];
    cartItem.push(product);
    localStorage.setItem("cartProduct", JSON.stringify(cartItem));
    window.location.href = "/Demo-Shop/product";
    alert("Item added to cart.");
  };
  return (
    <>
      <div className="container product mt-3">
        <div className="row p-3">
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

export default Product;
