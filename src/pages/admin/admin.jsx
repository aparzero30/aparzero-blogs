import classes from "./admin.module.css";
import SideBar from "../../components/sidebar/sidebar";
import BlogForm from "../../components/blogform/blogform";
import { useState } from "react";

const AdminPage = () => {
  const [showBlogForm, setShowBlogForm] = useState(true);
  const [showBlogList, setShowBlogList] = useState(false);

  const showBlogFormHandler = () => {
    setShowBlogForm(true);
    setShowBlogList(false);
  };

  const showBlogListHandler = () => {
    setShowBlogForm(false);
    setShowBlogList(true);
  };

  return (
    <div className={classes.admin}>
      <SideBar showForm={showBlogFormHandler} showList={showBlogListHandler} />
      {showBlogForm && <BlogForm />}
    </div>
  );
};
export default AdminPage;
