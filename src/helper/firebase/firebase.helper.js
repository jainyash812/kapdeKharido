import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUIGcXvpP8cg2e1c5OfzXZ3Z9GMD3cr7E",
  authDomain: "kapde-kharido-db.firebaseapp.com",
  projectId: "kapde-kharido-db",
  storageBucket: "kapde-kharido-db.appspot.com",
  messagingSenderId: "1002091030652",
  appId: "1:1002091030652:web:347d0fadad28443eab01f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const firestoreDB = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDoc = doc(firestoreDB, "users", userAuth.uid);

  const getUserDoc = await getDoc(userDoc);

  if (!getUserDoc.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDoc, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating a user in firestore db", error.message);
    }
  }
  return userDoc;
};
