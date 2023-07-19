import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function EditNotes({ arrayOrderNotes }) {

    const [notes, setNotes] = useState('');
   

    const navigate = useNavigate();
    const { id } = useParams();

    const getProductById = async (id) => {
        const noteRef = doc(db, "Notes", id);
        const noteSnap = await getDoc(noteRef);

        if (noteSnap.exists()) {
        
            setNotes(noteSnap.data().note);
        } else {
            console.log('no existe');
        }
    }

    const updateNotes = async (note, id) => {
        const docRef = doc(db, "Notes", id)
        const data = {note: note}
          
        await updateDoc(docRef, data)
        navigate('/')
       } 

    useEffect(() => {
        

        getProductById(id);


    }, [id]);



    return (
        <>

           
            <div className="content-notes-modal">
                <label>NOTA</label>
                <textarea className="modal-note" value={notes} onChange={(ev) => setNotes(ev.target.value)}></textarea>
            </div>

            <div className="container-button-send">
                <button onClick={() => updateNotes(notes, id) } className="button-send-func">CREAR NOTA</button>
            </div>

        </>
    )
}

export default EditNotes;