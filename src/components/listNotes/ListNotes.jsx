import './listNotes.css'
import React, { useState, useEffect } from "react";
import { getOrdersFirebase } from '../../firebase/firebaseFunction'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";


const MySwal = withReactContent(Swal)

function ListNotes() {

  const [arrayOrderNotes, setArrayOrderNotes] = useState([]);

  const deleteNotes = async (noteId) => {
    try {
      // Eliminar la nota de la base de datos
      await deleteDoc(doc(db, "Notes", noteId));
      // Actualizar el estado eliminando la nota del array de notas
      setArrayOrderNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };

  const confirmDelete = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNotes(id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const result = await getOrdersFirebase();
        setArrayOrderNotes(result);
      } catch (error) {
        console.log("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, [])



  return (
    <>
      <div className="notes-list-container" >
        {arrayOrderNotes.map((item) => {

          return (

            <div className='note-list' key={item.id}>

              <p> {item.note} </p>
              <button onClick={() => { confirmDelete(item.id) }}>
                <AiOutlineDelete />
              </button>

              <Link to={`/note/${item.id}`}><AiOutlineEdit></AiOutlineEdit></Link>
            </div>

          )
        })
        }
      </div>
    </>
  )
}

export default ListNotes;