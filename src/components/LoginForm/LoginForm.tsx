import { Field, Form, Formik } from "formik";
import SubmitButton from "../SubmitBtn/SubmitBtn";

const LoginForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => console.log(values)}
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
