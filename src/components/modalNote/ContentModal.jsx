import "./modal.css"

function ContentModal({ note, setNote }) {

    return (
        <>
            <div className="content-notes-modal">
                <label>NOTA</label>
                <textarea className="modal-note" value={note} onChange={(ev) => setNote(ev.target.value)}></textarea>
            </div>
        </>
    )
}

export default ContentModal;