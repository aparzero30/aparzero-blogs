import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/main/main";
import LoginPage from "./pages/login/login";
import loginAction from "./components/loginform/loginaction";
import CreatePage from "./pages/create/createpage";
import CreateLoader from "./pages/create/createloader";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "create",
        element: <CreatePage />,
        loader: CreateLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
