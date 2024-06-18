import { db } from "../firebase/firebaseConfig";
// import { doc, getDoc } from "firebase/firestore";

import { useLoaderData, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { doc,getDoc} from "firebase/firestore";

//  export const loader = async ({ params }) => {
//   const {id} = params
//   const docRef = doc(db, "foods",id);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
  //  const docRef = doc(db, "foods", params.id);
  //  const docSnap = await getDoc(docRef);
  //  console.log(docSnap.exists());

  //  if (docSnap.exists()) {
  //    return docSnap.data();
  //  } else {
  //    // docSnap.data() will be undefined in this case
  //    console.log("No such document!");
  //  }
//    return null;
//  };

function SingleRecipies() {
  const {id} = useParams()
  console.log(id);;
  //  const data = useLoaderData();
  //  console.log(data);
    const [recipe, setRecipe] = useState(null);
   
      
 
useEffect(() => {
  const fetchRecipe = async () => {
    try {
      const docRef = doc(db, "foods", id);
      const docSnap = await getDoc(docRef);
      console.log(docSnap.exists());
      // if (docSnap.exists()) {
      //   setRecipe(docSnap.data());
      // } else {
      //   console.log("No such document!");
      // }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  fetchRecipe();
}, [id]);
console.log(recipe);
    
  return (
    <div>SingleRecipies
      <h2>hello</h2>
    </div>
  )
}

export default SingleRecipies