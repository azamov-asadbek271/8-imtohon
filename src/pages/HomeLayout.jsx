import { Outlet } from "react-router-dom"
function HomeLayout() {
  return (
    <div>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default HomeLayout