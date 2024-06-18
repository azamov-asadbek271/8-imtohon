import { db } from "../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useLoaderData } from "react-router-dom";

 export const loader = async ({ params }) => {
  console.log(params.id);
   const docRef = doc(db, "foods", params.id);
   const docSnap = await getDoc(docRef);

   if (docSnap.exists()) {
     return docSnap.data();
   } else {
     // docSnap.data() will be undefined in this case
     console.log("No such document!");
   }
   return null;
 };

function SingleRecipies() {
   const data = useLoaderData();
   console.log(data);
    // const [recipe, setRecipe] = useState(null);
   
      
 
// useEffect(() => {
//   const fetchRecipe = async () => {
//     try {
//       const docRef = doc(db, "foods", id);
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setRecipe(docSnap.data());
//       } else {
//         console.log("No such document!");
//       }
//     } catch (error) {
//       console.error("Error getting document:", error);
//     }
//   };

//   fetchRecipe();
// }, [id]);
// console.log(recipe);
    
  return (
    <div>SingleRecipies
      <h2>hello
      </h2>
    </div>
  )
}

export default SingleRecipies