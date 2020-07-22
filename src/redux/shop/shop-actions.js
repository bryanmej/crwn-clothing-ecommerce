import {
  firestore,
  convertCollectionSnapshot,
} from "../../firebase/firebase-utils";

export const fetchCollectionStart = () => ({
  type: "FETCH_COLLECTION_START",
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: "FETCH_COLLECTION_SUCCESS",
  payload: collectionMap,
});

export const fetchCollectionFail = (errorMsg) => ({
  type: "FETCH_COLLECTION_FAIL",
  payload: errorMsg,
});

export const fetchCollectionAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshot(snapshot);
        dispatch(fetchCollectionSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionFail(error.message)));
  };
};
