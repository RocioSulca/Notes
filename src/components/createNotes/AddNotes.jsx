import { AiOutlinePlusCircle, AiOutlineSchedule } from "react-icons/ai";
import '../style.css'
import { Link } from "react-router-dom";


function AddNotes() {

    return (
        <>
            <section className="header-note">
                <h1>NOTITAS </h1>
                <p className="header-icon"><AiOutlineSchedule /></p>
            </section>
            <section>
                <Link to='/create' className="add-notes"><AiOutlinePlusCircle /> AGREGAR NOTAS</Link >
            </section>
        </>
    )
}

export default AddNotes;