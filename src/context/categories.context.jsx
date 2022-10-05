import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../helper/firebase/firebase.helper";
//import { addCollectionAndDocuments } from "../helper/firebase/firebase.helper";
//import Categories_With_Product_Data from "../shopData.js";

export const CategoryContext = createContext({
  categoriesArr: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesArr, setCategoriesArr] = useState([]);
  const value = { categoriesArr };

  useEffect(() => {
    const dataFetchedFromFireStoreDB = async () => {
      const data = await getCategoriesAndDocuments();
      setCategoriesArr(data);
    };
    dataFetchedFromFireStoreDB();
  }, []);
  /* Code to add collections in firestore DB */
  //   useEffect(() => {
  //     addCollectionAndDocuments("categories", Categories_With_Product_Data);
  //   }, []);

  return (
    <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
  );
};
