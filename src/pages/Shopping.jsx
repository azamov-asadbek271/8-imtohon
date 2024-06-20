import { useSelector } from "react-redux"

function Shopping() {
    const { cartItem, orderTotal } = useSelector((state) => state.cartState);
    console.log(cartItem);
    const { title, price, ingredients, image, amount, cookingTime } =
      cartItem[0];
  return (
    <>
      {cartItem && (
        <div className="mt-10 flex justify-between">
          <div className="w-96 card">
            <h2 className="font-bold text-3xl text-center">{title}</h2>
            <img
              src={image}
              alt=""
              className="w-full object-cover mt-5 rounded"
            />
            <div className="flex gap-5 mt-5">
              <p>ingredients: </p>
              {ingredients.map((item) => {
                return (
                  <p key={item} className="bg-cyan-300 rounded px-3">
                    {item}
                  </p>
                );
              })}
            </div>
            <div className=" flex flex-col gap-5 mt-5">
              <p>
                <span className="font-medium">CookingTime:</span> {cookingTime}
                Minutes
              </p>
              <p>
                {" "}
                <span className="font-medium">Price:</span> {price},000 So'm
              </p>
            </div>
            <p className="mt-5 flex gap-2">
              {" "}
              <span className="font-medium">Amount:</span>
              {amount}
            </p>
          </div>
          <div className="mt-20">
            <p className=" flex justify-between text-xl border-b border-base-300 pb-2 w-96 mt-10">
              <span className="font-bold">Subtotal</span>
              <span className="font-medium">{price},000 So'm</span>
            </p>
            <p className=" flex justify-between text-xl border-b border-base-300 pb-2 w-96 mt-10">
              <span className="font-bold">Order total</span>
              <span className="font-medium">{orderTotal},000 So'm</span>
            </p>
            <button className="btn btn-primary mt-5 w-full">Check Out</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Shopping