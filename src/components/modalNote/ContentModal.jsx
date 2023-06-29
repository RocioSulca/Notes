import { useState } from "react";
import FirebaseFunction from "../../firebase/firebaseFunction";
import "./modal.css"

function ContentModal({ note, setNote, title, setTitle, isImportant, setIsImportant }) {

    return (
        <>
            <div className="content-notes-modal">
                <label>TITULO DE LA NOTA</label>
                <input type='text' value={title} onChange={(ev) => setTitle(ev.target.value.toUpperCase())}></input>
                <label>NOTA</label>
                <textarea className="modal-note" value={note} onChange={(ev) => setNote(ev.target.value)}></textarea>
                {/* <input type="checkbox" checked={isImportant} onChange={(ev) => handleCheckboxChange(ev)}></input> */}
            </div>
            {/* <input type='checkbox' checked={isImportant} checked='false' onChange={(ev) => handleCheckboxChange(ev)}></input> */}
        </>
    )
}

export default ContentModal;