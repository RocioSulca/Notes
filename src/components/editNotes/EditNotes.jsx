import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";


function EditNotes() {

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
        const data = { note: note }
        await updateDoc(docRef, data)
        navigate('/')
    }

    useEffect(() => {
        getProductById(id);
    }, [id]);



    return (
        <>
            <section className='title-container'>
                <Link to='/' className='back-icon'><AiOutlineArrowLeft /></Link>
                <h1>EDITA TU NOTA</h1>
            </section>

            <div className="content-notes-modal">
                <textarea className="modal-note" value={notes} onChange={(ev) => setNotes(ev.target.value)}></textarea>
            </div>

            <div className="container-button-send">
                <button onClick={() => updateNotes(notes, id)} className="button-send-func">EDITAR NOTA</button>
            </div>

        </>
    )
}

export default EditNotes;