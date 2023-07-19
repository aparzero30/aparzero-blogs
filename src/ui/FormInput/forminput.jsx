import classes from "../FormInput/frominput.module.css";

const FormInput = (props) => {
  return (
    <div className={classes.inputWrapper} required>
      <i className={props.className} />
      <input
        type={props.type}
        name={props.name}
        placeholder={props.label}
        required
        onChange={props.onChange}
      />
    </div>
  );
};
export default FormInput;
