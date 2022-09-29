import {
  signInWithGooglePopup,
  createUserDocument,
} from "../../helper/firebase/firebase.helper";

const Login = () => {
  const handleLoginOfUser = async () => {
    const { user } = await signInWithGooglePopup();
    //console.log(response, "response from handleLoginOfUser function ");
    const createdUserDoc = await createUserDocument(user);
    console.log(createdUserDoc, "created userDoc");
  };
  return (
    <>
      <h1>Login Component</h1>
      <button onClick={handleLoginOfUser}>Login with Google</button>
    </>
  );
};
export default Login;
