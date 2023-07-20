import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";



export const getOrdersFirebase = async (callback) => {
  const arrayProduct = [];
  const querySnapshot = await getDocs(collection(db, "Notes"));
  querySnapshot.forEach((doc) => {
    arrayProduct.push({ id: doc.id, ...doc.data() });
  });
  return arrayProduct;
};


export const sendNotes = async (note, setNote) => {
  const docRef = addDoc(collection(db, "Notes"), {
    note: note,
  })
  await docRef
  setNote('')
}



