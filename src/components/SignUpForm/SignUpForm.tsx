import { Field, Form, Formik } from "formik";
import SubmitButton from "../SubmitBtn/SubmitBtn";

const SignUpForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field type="text" name="name" />
        <Field type="text" name="surname" />
        <Field type="email" name="email" />
        <Field type="password" name="password" />
        <Field type="password" name="confirmPassword" />
        <SubmitButton title="sign up" />
      </Form>
    </Formik>
  );
};

export default SignUpForm;
