// fairbse
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";


// reduc
import { useSelector,useDispatch} from "react-redux";
// router-dom
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
// components
import { ProtectRouter } from "./components";
// pages
import { Create, Home, HomeLayout, Login, Register, SingleRecipies, Theme } from "./pages";
// actions
import { action as RegisterActions } from "./pages/Register";
import { action as CreateActions } from "./pages/Create";
// loader
import { loader as singleLoader } from "./pages/SingleRecipies";

// userConfig
import { login,authReady } from "./features/user/UserConfig";


function App() {
  const { user, authReadyState } = useSelector((state) => state.userState);

  const dispatch = useDispatch();
 const routes = createBrowserRouter([
   {
     path: "/",
     element: (
       <ProtectRouter user={user}>
         <HomeLayout />
       </ProtectRouter>
     ),
     children: [
       {
         index: true,
         element: <Home />,
       },
       {
         path: "/create",
         element: <Create />,
         action: CreateActions,
       },
       {
         path: "/theme",
         element: <Theme />,
       },
       {
         path: "/singleRecipies/:id",
         element: <SingleRecipies />,
         loader: singleLoader,
       },
     ],
   },
   {
     path: "/login",
     element: user ? <Navigate to="/" /> : <Login />,
   },
   {
     path: "register",
     element: user ? <Navigate to="/" /> : <Register />,
     action: RegisterActions,
   },
 ]);
 useEffect(() => {
   onAuthStateChanged(auth, (user) => {
     dispatch(login(user));
     dispatch(authReady());
   });
 });

  return <>{authReadyState && <RouterProvider router={routes} />}</>;
}

export default App