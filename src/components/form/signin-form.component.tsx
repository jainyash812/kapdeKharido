import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocument,
  signInAuthUserWithEmailAndPassword,
} from "../../helper/firebase/firebase.helper";
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
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
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
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
