import classes from "./sidebox.module.css";

const SideBox = (props) => {
  const onClickHandler = () => {
    props.onClick();
  };

  // Define the background color based on the props.active value
  const backgroundColor = props.active ? "#12192c" : "transparent";

  return (
    <section
      className={classes.sidebox}
      onClick={onClickHandler}
      style={{ backgroundColor }} // Set the inline style
    >
      <i className={props.className} />
      <label>{props.label}</label>
    </section>
  );
};
export default SideBox;
