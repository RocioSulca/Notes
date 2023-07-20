import './style.css'
import React, { useState, useEffect } from "react";
import { getOrdersFirebase } from '../firebase/firebaseFunction'
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";


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
      title: '¿Estas seguro?',
      text: "¡No podrás revertirlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNotes(id)
        Swal.fire(
          'Eliminado!',
          'Tu nota ha sido eliminada.',
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
              <section className='add-delete-container'>
                <Link className='button-delete' to={`/note/${item.id}`}><AiFillEdit /></Link>
                <button className='button-delete' onClick={() => { confirmDelete(item.id) }}>
                  <AiFillDelete />
                </button>
              </section>
              <p> {item.note} </p>
            </div>

          )
        })
        }
      </div>
    </>
  )
}

export default ListNotes;