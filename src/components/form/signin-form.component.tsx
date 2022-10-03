import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../helper/firebase/firebase.helper";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();
      navigate("/");
    } catch (error: any) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const loginWithGoogle = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  return (
    <div className="form-container">
      <h1>Login with your credentials</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <label
            className={`${email.length > 0 ? "shrink" : ""} form-input-label`}
          >
            Email
          </label>
        </div>
        <div className="form-input-container">
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="form-input"
            autoComplete="off"
          />
          <label
            className={`${
              password.length > 0 ? "shrink" : ""
            } form-input-label`}
          >
            Password
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button buttonType="inverted">Log In</Button>
          <Button buttonType="google" onClick={loginWithGoogle}>
            Login with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
