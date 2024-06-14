import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { ProtectRouter } from "./components";
import { Home, Login, Register } from "./pages";
import HomeLayout from "./pages/HomeLayout";
function App() {
 const routes = createBrowserRouter([
   {
     path: "/",
     element: (
       <ProtectRouter user={false}>
         <HomeLayout />
       </ProtectRouter>
     ),
     children: [
       {
         index: true,
         element: <Home />,
       },
     ],
   },
   {
     path: "/login",
     element: <Login />,
   },
   {
     path: "register",
     element: <Register />,
   },
 ]);

  return <RouterProvider router={routes}/>
}

export default App