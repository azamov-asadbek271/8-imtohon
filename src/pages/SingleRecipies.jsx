import { db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLoaderData, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";




// export const loader = async ({ params }) => {
//   const docRef = doc(db, "foods", params.id);
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.exists());
//   //

//   if (docSnap.exists()) {
//     return docSnap.data();
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
//   return null;
// };
function SingleRecipies() {
   const { user } = useSelector((state) => state.userState);
   
       const { id } = useParams();
       const [recipe, setRecipe] = useState(null);

       useEffect(() => {
         const fetchRecipe = async () => {
           try {
             const docRef = doc(user.uid, "foods", id);
             const docSnap = await getDoc(docRef);
             if (docSnap.exists()) {
               setRecipe(docSnap.data());
             } else {
               console.log("No such document!");
             }
           } catch (error) {
             console.error("Error getting document:", error);
           }
         };

         fetchRecipe();
       }, [id]);
    

    const data = useLoaderData();
    console.log(data);
  return <div>SingleRecipies</div>;
}

export default SingleRecipies;
