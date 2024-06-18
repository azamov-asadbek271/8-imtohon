import { useSelector } from "react-redux";
import { ResipiesList } from "../components";
import { useCollection } from "../hook/useCollection";


function Home() {
  const { user } = useSelector((state) => state.userState);
    const {data} = useCollection("foods",["uid","==",user.uid])
    console.log(data);
  return (
    <div>
      <h2 className="font-bold text-xl mb-10 mt-10">All Recipies</h2>
      {data && <ResipiesList recipies={data} />}
    </div>
  );
}

export default Home