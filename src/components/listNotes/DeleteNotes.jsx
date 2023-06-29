import { AiOutlineDelete } from "react-icons/ai";
import { editPost } from "../../firebase/firebaseFunction";

function DeleteNotes() {
    return (
        <>
            <button>
                <AiOutlineDelete />
            </button>
        </>
    )
}

export default DeleteNotes;