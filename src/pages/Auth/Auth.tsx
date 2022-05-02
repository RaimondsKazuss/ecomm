// import { Field, Form, Formik } from "formik";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

//TODO:
//form wrapper component
//input component

const Auth: React.FC<{ login?: boolean }> = ({ login }) => {
  if (login) return <LoginForm />;

  return <SignUpForm />;
};

export default Auth;
