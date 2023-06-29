// import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"
import { collection, addDoc, updateDoc } from "firebase/firestore";
import "../components/modalNote/modal.css"

function FirebaseFunction({ note, setNote, title, setTitle, isImportant, setIsImportant, modalState, setModalState }) {

  const sendNotes = () => {
    const docRef = addDoc(collection(db, "Notes"), {
      title: title,
      note: note,
      //isImportant: isImportant
    }).then(() => {
      setNote('');
      setTitle('');
    });
    return docRef
  }


  return (
    <>
      <div className="container-button-send">
        <button onClick={() => sendNotes() && setModalState(!modalState)} disabled={!note || !title} className="button-send-func">CREAR NOTA</button>
      </div>
    </>
  )
}

export default FirebaseFunction;