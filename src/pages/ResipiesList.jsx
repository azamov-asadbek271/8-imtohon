import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { generateAmountOptions } from "../uitls/Index";
import { addItem } from "../features/cart/CartSlice";
import { useDispatch } from "react-redux";

function ResipiesList({ recipies }) {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between gap-3  flex-wrap ">
      {recipies.map((res) => {
        const [amount, setAmount] = useState();
        const { title, image, price, cookingTime,id } = res;
          const cartProduct = {
            cartID:title + id,
            productID: id,
            image,
            title,
            price,
            amount: Number(amount),
          };
          const addToCart = () => {
            dispatch(
              addItem({
                product: cartProduct,
              })
            );
          };
        return (
          <div key={id}>
            {image && price && (
              <div className=" lg:w-80  w-64 flex justify-between flex-col rounded bg-base-300 mb-6">
                <div className="p-4">
                  {/* button */}
                  <div className="delete-box w-full justify-end flex ">
                    <MdDelete className="text-3xl" />
                  </div>
                  {/* title */}
                  <h1 className="text-2xl mb-3">{title}</h1>
                  {/* method */}
                  <p className="line-clamp-3 mb-2 font-bold">
                    {price},000 So'm
                  </p>
                  <div className="form-control w-full max-w-xs mb-10">
                    <label className="label mt-2">
                      <h4 className=" text-md font-medium tracking-wider capitalize">
                        amount
                      </h4>
                    </label>
                    <select
                      className="select select-secondary select-bordered select-sm"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    >
                      {generateAmountOptions(10)}
                    </select>
                  </div>
                  {/* time */}
                  <div className="Link-Box flex justify-end items-center gap-2 mb-4">
                    <button
                      onClick={addToCart}
                      className="btn btn-secondary btn-sm"
                    >
                      Add to Bag
                    </button>

                    <p className="p-1 bg-orange-400 rounded">
                      {cookingTime} Minutes
                    </p>
                  </div>
                </div>
                <div className="">
                  <img
                    className=" w-full h-52 flex object-cover rounded"
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ResipiesList;

//  <div key={res.id} className="card w-80 bg-base-100 shadow-xl  mb-5">
//             <div className="card-body">
//
//               <p className="flex gap-2">
//                 {res.ingredients.map((ing) => {
//                   return <span key={ing}>{ing},</span>;
//                 })}
//               </p>
//             </div>
//             <figure>
//               <img className="rounded" src={res.image} alt="Shoes" />
//             </figure>
//           </div>
