import { Outlet } from "react-router-dom"
import { Navbar } from "../components";
function HomeLayout() {
  return (
    <div >
      <Navbar />
      <main className="con-align ">
        <Outlet />
      </main>
    </div>
  );
}

export default HomeLayout