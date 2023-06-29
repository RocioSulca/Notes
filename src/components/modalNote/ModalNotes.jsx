import './modal.css'
import { AiOutlineClose } from "react-icons/ai";
import FirebaseFunction from '../../firebase/firebaseFunction'
import ContentModal from './ContentModal';

function ModalNotes ({modalState, setModalState, note, setNote, title, setTitle, isImportant, setIsImportant}) {

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
                        <ContentModal note={note} setNote={setNote} title={title} setTitle={setTitle} isImportant={isImportant} setIsImportant={setIsImportant}/>
                        <FirebaseFunction note={note} setNote={setNote} title={title} setTitle={setTitle} modalState={modalState} setModalState={setModalState} />
                    </div>
                </div>
            }
        </>
    )
}

export default ModalNotes;