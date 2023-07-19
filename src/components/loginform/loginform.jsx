import classes from "./loginform.module.css";
import { Form } from "react-router-dom";
import FormInput from "../../ui/FormInput/forminput";

const LoginForm = () => {
  return (
    <Form className={classes.form} method="POST">
      <h1>aparzero</h1>

      <FormInput label="Email" type="email" name="userEmail" required={true} />
      <FormInput
        label="Password"
        type="password"
        name="userPassword"
        required={true}
      />

      <button>LOGIN</button>
    </Form>
  );
};

export default LoginForm;
