import { AiOutlinePlusCircle, AiOutlineSchedule } from "react-icons/ai";
import ModalNotes from "./ModalNotes";
import { useState } from "react";
import './modal.css'

function AddNotes() {

    const [modalState, setModalState] = useState(false);
    let [note, setNote] = useState('');


    return (
        <>
            <section className="header-note">
                <h1>NOTITAS </h1>
                <p className="header-icon"><AiOutlineSchedule /></p>
            </section>
            <button className="add-button" onClick={() => setModalState(!modalState)}>
                <AiOutlinePlusCircle /> AGREGAR NOTAS
            </button>
            <ModalNotes modalState={modalState} setModalState={setModalState} note={note} setNote={setNote} />
            {/*Aqui va a ir ListNotes, se le pasa las const para usar, en ListNotes se le pasa el boton de editar, que a su vez
        se le pasan las const para usar y todo se usa en edit Notes */}
        </>
    )
}

export default AddNotes;