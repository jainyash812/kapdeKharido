import SignUpForm from "../../components/form/signup-form.component";
import SignInForm from "../../components/form/signin-form.component";
import "./auth.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
