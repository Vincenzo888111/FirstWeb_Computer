import { useState } from "react";

function Payment({ cart = [] }) {
  // Track quantities for each item
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => {
      acc[item.id] = 1; // default quantity 1
      return acc;
    }, {})
  );

  // Change quantity
  const changeQty = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + delta, 0),
    }));
  };

  // Calculate subtotal and total
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (quantities[item.id] || 1),
    0
  );
  const shipping = 2;
  const total = subtotal + shipping;

  return (
    <div className="p-5 mt-20">
      <h1 className="text-4xl text-center font-bold mb-6">Payment</h1>

      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-10 ">
        {/* Cart Items */}
        <div className="w-full border border-sky-400 rounded-2xl p-5 shadow-md shadow-sky-300">
          <h2 className="text-center font-bold text-2xl mb-4"><i className="fa-solid fa-cart-shopping text-sky-400 text-4xl"></i>Shopping Cart<i class="fa-regular fa-heart text-sky-400 text-4xl "></i></h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center gap-4 border-b py-5"
              >
                <div>
                  <img
                  src={item.img}
                  className="w-none h-35 rounded"
                />
                </div>
                <div>
                  <p>{item.name}</p>
                  <p className="text-sky-400 font-bold">${item.price * (quantities[item.id] || 1)}</p>

                  {/* Counter */}
                  <div className="flex justify-end items-center gap-2 mt-1">
                    <button
                      onClick={() => changeQty(item.id, -1)}
                      className="bg-black text-white px-2 rounded"
                    >
                      -
                    </button>
                    <span>{quantities[item.id]}</span>
                    <button
                      onClick={() => changeQty(item.id, 1)}
                      className="bg-sky-500 text-white px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Payment Summary */}
        <div className="md:w-full sm:full h-[400px] border border-sky-400 shadow-md shadow-sky-300 rounded-2xl p-5 mb-20">
          <h2 className="text-2xl text-center font-bold mb-2"><i class="fa-brands fa-cc-mastercard text-sky-400 text-4xl"></i>Cart Summary<i class="fa-regular fa-heart text-sky-400 text-4xl"></i></h2>
          <div className="flex justify-between my-5">
            <p className="font-bold">Subtotal:</p>
            <p className="text-sky-400 pl-3 font-bold">${subtotal}</p>
          </div>
          <div className="flex justify-between my-5">
            <p className="font-bold">Shipping:</p>
            <p className="text-sky-400 pl-3 font-bold">${shipping}</p>
          </div><hr />
          <div className="flex justify-between mt-5">
            <p className="font-bold">Total Cost:</p>
          <p className="text-sky-400 pl-3 font-bold">${total}</p>
          </div>
         <button class="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white font-medium py-3 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            Complete Purchase
        </button>
         <p class="text-center text-gray-500 text-sm mt-4">🔒 Secure Payment. Your information is encrypted.</p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
