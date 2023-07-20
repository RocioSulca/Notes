import { AiOutlinePlusCircle, AiOutlineSchedule } from "react-icons/ai";
import ModalNotes from "./ModalNotes";
import { useState } from "react";
import './modal.css'
import { Link } from "react-router-dom";


function AddNotes() {

    const [modalState, setModalState] = useState(false);
    let [note, setNote] = useState('');


    return (
        <>
            {/*<section className="header-note">
                <h1>NOTITAS </h1>
                <p className="header-icon"><AiOutlineSchedule /></p>
            </section>
            <button className="add-button" onClick={() => setModalState(!modalState)}>
                <AiOutlinePlusCircle /> AGREGAR NOTAS
            </button>
    <ModalNotes modalState={modalState} setModalState={setModalState} note={note} setNote={setNote} />*/}
            <Link to='/create'><AiOutlinePlusCircle/> AGREGAR NOTAS</Link >



        </>
    )
}

export default AddNotes;