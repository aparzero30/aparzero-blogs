import classes from "../blogwrapper/blogwrapper.module.css";

const BlogWrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};
export default BlogWrapper;
