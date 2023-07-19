import { collection, getDocs, addDoc, deleteDoc, doc  } from "firebase/firestore";
import { db } from "./firebaseConfig";




export const getOrdersFirebase = async (callback) => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(collection(db, "Notes"));
    querySnapshot.forEach((doc) => {
      arrayProduct.push({ id: doc.id, ...doc.data() });
    });
    return arrayProduct;
  };

export const sendNotes = ( note, setNote) => {
    const docRef = addDoc(collection(db, "Notes"), {

      note: note,
      //isImportant: isImportant
    }).then(() => {
      setNote('');
    });
    //getOrdersFirebase()
    return docRef
  }

 export const deleteNotes = async (id) => {
  await deleteDoc(doc(db,'Notes', id));
  getOrdersFirebase()
 }