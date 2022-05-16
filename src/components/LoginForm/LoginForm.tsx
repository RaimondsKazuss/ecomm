import { Field, Form, Formik } from "formik";
import SubmitButton from "../SubmitBtn/SubmitBtn";
import UserContext from "../../UserContext";
import { useContext } from "react";

const LoginForm: React.FC = () => {
  const { value, setValue } = useContext(UserContext);

  const submitHandler = (values: { email: string; password: string }) => {
    console.log(values);
    setValue(values.email);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => submitHandler(values)}
    >
      <Form>
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <SubmitButton title="submit" />
      </Form>
    </Formik>
  );
};

export default LoginForm;
