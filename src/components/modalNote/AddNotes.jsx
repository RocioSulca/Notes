import { AiOutlinePlusCircle, AiOutlineSchedule } from "react-icons/ai";
import ModalNotes from "./ModalNotes";
import { useState } from "react";
import './modal.css'

function AddNotes() {

    const [modalState, setModalState] = useState(false);
    let [title, setTitle] = useState('');
    let [note, setNote] = useState('');
    // 
    let [isImportant, setIsImportant] = useState(false)



    return (
        <>
            <section className="header-note">
                <h1>NOTITAS </h1>
                <p className="header-icon"><AiOutlineSchedule /></p>
            </section>
            <button className="add-button" onClick={() => setModalState(!modalState)}>
                <AiOutlinePlusCircle /> AGREGAR NOTAS
            </button>
            <ModalNotes modalState={modalState} setModalState={setModalState} note={note} setNote={setNote} title={title} setTitle={setTitle} isImportant={isImportant} setIsImportant={setIsImportant} />

        </>
    )
}

export default AddNotes;