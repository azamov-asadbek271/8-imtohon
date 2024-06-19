import { Form, useActionData } from "react-router-dom";
import { FormInput } from "../components";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { collection,addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useSelector } from "react-redux";


export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let cookingTime = formData.get("cookingTime");
  let method = formData.get("method");
  let image = formData.get("image");
  let price = formData.get("price");
  
  return { title, cookingTime, method,image,price };
};
function Create() {
    const naviget = useNavigate();
    // const { data, addNewDoc } = useCreateRecipieAdd();
    const { user } = useSelector((state) => state.userState);
    const createData = useActionData()
    console.log(createData);
    const [ingredients, setIngredients] = useState([]);
    const [ingredient, setIngredient] = useState("");
    const addIngredient = (e) => {
      e.preventDefault();
      if (!ingredients.includes(ingredient)) {
        setIngredients((prev) => {
          return [...prev, ingredient];
        });
      }

      setIngredient("");
     
    };
    useEffect(() => {
     const newCreateData = {
       ...createData,
       ingredients,
       uid: user.uid,
       id: Math.random() + user.uid
     };
  
     addDoc(collection(db, "foods"), newCreateData);
     
     
    },[createData])
    const homebtn = () => {
      if(createData) {
        naviget("/")
      }
    }
    
    //  useEffect(() => {
    //    if (createData && !data) {
    //      const newCreateData = {
    //        ...createData,
    //        ingredients,
    //      };
    //      addNewDoc(newCreateData);
    //    }
    //    if (data) {
    //      naviget("/");
    //    }
    //  }, [createData, data]);
    
  return (
    <div className=" grid place-items-center">
      <div className="max-w-96 w-full">
        <h1 className="text-3xl text-center font-bold">Create New Recipie</h1>
        <Form method="post" >
          <FormInput type="text" label="Title:" name="title" />
          <div className="flex justify-center flex-col">
            <div className="flex items-center w-full gap-5">
              <label className="form-control w-full mb-3">
                <div className="label">
                  <span className="label-text text-blue-400">Ingredient</span>
                </div>
                <input
                  onChange={(e) => setIngredient(e.target.value)}
                  type="text"
                  name="ingredient"
                  placeholder="Type here"
                  className="input input-bordered w-full"
                  value={ingredient}
                />
              </label>
              <button
                onClick={addIngredient}
                className="btn btn-secondary flex mt-6"
              >
                Add
              </button>
            </div>
            <p className="-mt-2 mb-3 text-blue-400">
              Ingredients:
              {ingredients.map((ing) => {
                return <span key={ing}> {ing},</span>;
              })}
            </p>
          </div>
          <FormInput
            type="number"
            label="Cooking Time:"
            name="cookingTime"
            step="10"
          />
          <FormInput type="text" label="Method:" name="method" />
          <FormInput type="url" label="Image:" name="image" />
          <FormInput
            type="number"
            label="Price:"
            name="price"
            min="100"
            max="10000"
            step="10"
          />
          <div className="pr-[30px] mt-3">
            <button
            onClick={homebtn}
              type="submit"
              className="btn btn-secondary w-full mb-3 text-lg mt-3"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Create