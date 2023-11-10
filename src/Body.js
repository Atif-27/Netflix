import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Header from "./component/Header";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
