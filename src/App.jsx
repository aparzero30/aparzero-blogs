import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/main";
import LoginPage from "./pages/login/login";
import loginAction from "./components/loginform/loginaction";
import AdminPage from "./pages/admin/admin";
import AdminLoader from "./pages/admin/adminloader";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "/admin",
        element: <AdminPage />,
        loader: AdminLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
