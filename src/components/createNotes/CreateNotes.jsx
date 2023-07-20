import '../style.css';
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { AiOutlineArrowLeft } from "react-icons/ai";


function CreateNotes() {
    let [note, setNote] = useState('');
    const navigate = useNavigate();

    const sendNotes = async (note, setNote) => {
        const docRef = addDoc(collection(db, "Notes"), {
            note: note,
        })
        await docRef
        setNote('')
        navigate('/')
    }

    return (
        <>
            <section className='title-container'>
                <Link to='/' className='back-icon'><AiOutlineArrowLeft /></Link>
                <h1>CREA TU NOTA</h1>
            </section>
            <div className="content-notes-modal">
                <textarea className="modal-note" value={note} onChange={(ev) => setNote(ev.target.value)}></textarea>
            </div>
            <div className="container-button-send">
                <button onClick={() => sendNotes(note, setNote)} className="button-send-func" disabled={!note}>CREAR NOTA</button>
            </div>
        </>
    )
}

export default CreateNotes;