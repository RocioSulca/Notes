import React from 'react';
import { sendNotes } from '../../firebase/firebaseFunction'

function SendButton({ note, setNote, modalState, setModalState }) {
  return (
    <div>
      <div className="container-button-send">
        <button onClick={() => sendNotes(note, setNote) && setModalState(!modalState)} disabled={!note} className="button-send-func">CREAR NOTA</button>
      </div>
    </div>
  )
}

export default SendButton