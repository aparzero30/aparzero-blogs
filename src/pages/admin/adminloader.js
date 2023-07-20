import { redirect } from "react-router-dom";

const AdminLoader = () => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  if (!jwt || jwt === null) {
    return redirect("/login");
  }

  return "in session";
};
export default AdminLoader;
