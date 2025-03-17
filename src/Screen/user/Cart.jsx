const Cart = () => {
  const cartItem = JSON.parse(localStorage.getItem("cartProduct")) || [];
  const totalPrice = cartItem
    .reduce((totalPrice, item) => totalPrice + item.price, 0)
    .toFixed(2);
  const handlRemove = (id) => {
    const newCart = cartItem.filter((item) => item.id != id);
    localStorage.setItem("cartProduct", JSON.stringify(newCart));
    alert("Item Remove");
    window.location.href = "/Demo-Shop/#/cart";
  };
  return (
    <>
      <div className="container cart mt-3 p-3">
        {cartItem.length ? (
          <div className="row">
            <div className="col-md-8 col-sm-7">
              <div className="row">
                {cartItem.map((item) => (
                  <div className="col-md-6 mb-3" key={item.id}>
                    <div className="card">
                      <img
                        src={item.image}
                        className="card-img-top p-3 cardimg"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <h5>Price : {item.price}$</h5>
                        <h5>
                          Rating : {item.rating}
                          <i className="fa-solid fa-star fa-xs"></i>
                        </h5>
                        <a
                          onClick={() => handlRemove(item.id)}
                          className="btn btn-danger"
                        >
                          Remove Item
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 col-sm-5">
              <div className="card">
                <h5 className="card-header text-center fw-bold">Cart</h5>
                <div className="card-body">
                  <h3>Total Item : {cartItem.length}</h3>
                  <br />
                  <h3>Total Price : {totalPrice}$</h3>
                  <br />
                  <div className="d-grid gap-2 col-6 mx-auto">
                    <button className="btn btn-primary">Check Out!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card d-grid mx-auto col-4 p-3">
            <img
              src="src/Images/emoji.png"
              className="w-100 card-img-top emo justify-content-center"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center mt-2">
                Sorry, Your cart is empty!
              </h5>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
