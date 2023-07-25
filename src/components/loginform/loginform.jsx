import classes from "./loginform.module.css";
import { Form } from "react-router-dom";
import FormInput from "../../ui/FormInput/forminput";
import { useState } from "react";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const changeLoadingHandler = () => {
    setLoading((prev) => {
      !prev;
    });
  };

  console.log(loading);

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
      {!loading && <button onClick={changeLoadingHandler}>LOGIN</button>}

      {loading && (
        <div className={classes.loading}>
          <i className="fa-brands fa-react fa-spin" />
        </div>
      )}
    </Form>
  );
};

export default LoginForm;
