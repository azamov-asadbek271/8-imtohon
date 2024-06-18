import { useEffect, useState } from "react"
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function useCollection(currentCollection,userParams) {
 const [data,setData] = useState()
 useEffect(() => {
    const q = query(collection(db, currentCollection), where(...userParams));
    onSnapshot(q, (querySnapshot) => {
      const foods = [];
      querySnapshot.forEach((doc) => {
        foods.push({ id: doc.id, ...doc.data() });
      });
      setData(foods)
    });
 },[currentCollection,userParams[2]])
  return {data}
}

export  {useCollection}