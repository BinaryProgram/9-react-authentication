import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import LoginForm from "../pages/LoginForm/LoginForm";
import RegisterForm from "../pages/RegisterForm/RegisterForm";
import NewsCard from "../pages/News/NewsCard";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/newsCard/:id",
        element: <PrivateRoute><NewsCard/></PrivateRoute>,
        loader: async ({ params }) => {
          const res = await fetch("/news.json");
          const data = await res.json();
          return data.find((item) => item._id.toString() === params.id);
        },
        hydrateFallbackElement:<NewsCard/>
      },
      {
        path: "/loginForm",
        element: <LoginForm />,
      },
      {
        path: "/registerForm",
        element: <RegisterForm />,
      },
    ],
  },
]);
export default router;
