import { redirect } from "react-router-dom";

const CreateLoader = () => {
  const jwt = localStorage.getItem("JWT-TOKEN");

  if (!jwt || jwt === null) {
    return redirect("/login");
  }

  return "hello";
};
export default CreateLoader;
