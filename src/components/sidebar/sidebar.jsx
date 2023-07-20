import classes from "./sidebar.module.css";
import SideBox from "../sidebox/sidebox";
import { useState } from "react";

const SideBar = (props) => {
  const [createActive, setCreateActive] = useState(true);
  const [viewActive, setViewActive] = useState(false);

  const createBlogHandler = () => {
    setCreateActive(true);
    setViewActive(false);
    //call props function here
    props.showForm();
  };

  const viewBlogHandler = () => {
    setCreateActive(false);
    setViewActive(true);
    //call props function here
    props.showList();
  };

  return (
    <div className={classes.sidebar}>
      <SideBox
        className="fa-solid fa-feather-pointed"
        label="New Blog"
        active={createActive}
        onClick={createBlogHandler}
      />
      <SideBox
        className="fa-solid fa-book"
        label="View Blogs"
        active={viewActive}
        onClick={viewBlogHandler}
      />
      <SideBox className="fa-solid fa-book" label="Logout" />
    </div>
  );
};
export default SideBar;
