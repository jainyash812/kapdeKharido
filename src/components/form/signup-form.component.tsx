import "./signup-form.styles.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../helper/firebase/firebase.helper";
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formData, setFormData] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formData;
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const resetFormFields = () => {
    setFormData(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      console.log("formData", formData);
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocument(user, { displayName });
      resetFormFields();
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        //alert("Cannot create user, email already in use");
        setError(error.code);
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up Form</h1>
      <span>{error}</span>
      <form onSubmit={handleSubmit}>
        <div className="form-input-container">
          <input
            required
            type="text"
            name="displayName"
            value={displayName}
            onChange={handleChange}
            className="form-input"
          />
          <label
            className={`${
              displayName.length > 0 ? "shrink" : ""
            } form-input-label`}
          >
            Name
          </label>
        </div>
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
        <div className="form-input-container">
          <input
            required
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className="form-input"
          />
          <label
            className={`${
              confirmPassword.length > 0 ? "shrink" : ""
            } form-input-label`}
          >
            Confirm Password
          </label>
        </div>
        <Button buttonType="inverted">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
