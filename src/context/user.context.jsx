import { createContext, useState, useEffect } from "react";
import {
  createUserDocument,
  onAuthStateChangedListener,
} from "../helper/firebase/firebase.helper";

export const UserContext = createContext({
  userDetails: null,
  setUserDetails: (value) => null,
});

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  const value = { userDetails, setUserDetails };

  useEffect(() => {
    const cleanListener = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setUserDetails(user);
    });

    return cleanListener;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
