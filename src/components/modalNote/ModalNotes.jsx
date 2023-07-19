import './modal.css'
import { AiOutlineClose } from "react-icons/ai";
import ContentModal from './ContentModal';
import SendButton from './SendButton';

function ModalNotes ({modalState, setModalState, note, setNote}) {

    return (
        <>
            {modalState &&
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
            }
        </>
    )
}

export default ModalNotes;