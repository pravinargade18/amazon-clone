import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { SkeletonTheme } from "react-loading-skeleton";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
  ]
  // createRoutesFromElements(
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<Home />}></Route>
  //   </Route>
  // )
);

function App() {
  return (
    <SkeletonTheme baseColor="#ebebeb" highlightColor="#f5f5f5">
      <div className="font-bodyFont bg-gray-100">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </SkeletonTheme>
  );
}

export default App;
