import './modal.css'
import { AiOutlineClose } from "react-icons/ai";
import ContentModal from './ContentModal';
import SendButton from './SendButton';
// import { sendNotes } from '../../firebase/firebaseFunction';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";



function ModalNotes() {
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
            { /*modalState &&
                <div className="overlay">
                    <div className='modal-container'>
                        <div className='encabezado-modal'>
                            <h3>Crea tu Nota</h3>
                        </div>
                        <button className='button-close' onClick={() => setModalState(!modalState)}> 
                            <AiOutlineClose />
                        </button>
                        
                        <ContentModal note={note} setNote={setNote} />
                        <SendButton note={note} setNote={setNote}  modalState={modalState} setModalState={setModalState} />
                    </div>
                </div>
    */}

            <div className="content-notes-modal">
                <label>NOTA</label>
                <textarea className="modal-note" value={note} onChange={(ev) => setNote(ev.target.value)}></textarea>
            </div>
            <div className="container-button-send">
                <button onClick={() => sendNotes(note, setNote)} className="button-send-func">CREAR NOTA</button>
            </div>
        </>
    )
}

export default ModalNotes;