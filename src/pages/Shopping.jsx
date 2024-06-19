import { useSelector } from "react-redux"

function Shopping() {
    const { cartItem } = useSelector((state) => state.cartState);
    console.log(cartItem);
    const { title, price, ingredients, image, amount, cookingTime } =
      cartItem[0];
  return (
    <>
      {cartItem && (
        <div className="mt-10">
          <div className="w-96">
            <h2 className="font-bold text-3xl text-center">{title}</h2>
            <img src={image} alt="" className="w-full object-cover mt-5" />
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
        </div>
      )}
    </>
  );
}

export default Shopping