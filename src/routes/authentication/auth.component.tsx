import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  createUserDocument,
  signInWithGoogleRedirect,
} from "../../helper/firebase/firebase.helper";
import SignUpForm from "../../components/form/signup-form.component";
import SignInForm from "../../components/form/signin-form.component";

const Authentication = () => {

  const handleLoginOfUser = async () => {
    const { user } = await signInWithGooglePopup();
    const createdUserDoc = await createUserDocument(user);
  };

  return (
    <div className='authentication-container' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
     <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
