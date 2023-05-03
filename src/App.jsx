import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [{ index:true, element: <Home /> }],
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
    <div className="font-bodyFont">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
