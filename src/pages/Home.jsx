import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PieChart, ResipiesList } from "../components";
import { useCollection } from "../hook/useCollection";


function Home() {
  const { user } = useSelector((state) => state.userState);
    const {data} = useCollection("foods",["uid","==",user.uid])
    const {cartItem} = useSelector((state) => state.cartState);
    const [pieChartData, setPieChartData] = useState([]);
    useEffect(() => {
             if (data) {
               const typeCounts = {}; // Object to count likes per type
               data.forEach((item) => {
            if (
              item.id &&
              item.cookingTime &&
              item.image &&
              item.ingredients &&
              item.method &&
              item.price &&
              item.title
            ) {
              if (typeCounts[item.title]) {
                typeCounts[item.title] += 1; // Increment count for each type
              } else {
                typeCounts[item.title] = 1; // Initialize count for new type
              }
            }
                
               });

               // Format data for pie chart
               const pieData = Object.keys(typeCounts).map((type) => ({
                 type,
                 value: typeCounts[type],
               }));
               setPieChartData(pieData);
             }
    },[data])
    
  return (
    <div>
      <div className="w-full mt-5 h-52 posit rounded-lg p-4 ">
        <PieChart data={pieChartData} />
      </div>
      <h2 className="font-bold text-xl mb-10 mt-10">All Recipies</h2>
      {data && <ResipiesList recipies={data} />}
    </div>
  );
}

export default Home