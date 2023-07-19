import classes from "../wrapper/wrapper.module.css";

const Wrapper = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};
export default Wrapper;
