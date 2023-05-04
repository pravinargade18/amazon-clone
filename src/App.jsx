import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

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
  ]
  // createRoutesFromElements(
  //   <Route path="/" element={<Layout />}>
  //     <Route index element={<Home />}></Route>
  //   </Route>
  // )
);

function App() {
  return (
    <div className="font-bodyFont bg-gray-100">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
