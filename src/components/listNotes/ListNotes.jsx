import './listNotes.css'
import React, { useState, useEffect } from "react";
import {getOrdersFirebase} from '../../firebase/firebaseFunction'
import { AiOutlineDelete } from "react-icons/ai";
import {deleteNotes} from "../../firebase/firebaseFunction";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";



function ListNotes() {

  const [arrayOrderNotes, setArrayOrderNotes] = useState([]);
  
  

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

  
  // getOrdersFirebase(setArrayOrderNotes);
  console.log(arrayOrderNotes)


  return (
    <>
      <div className="notes-list-container" >
        {arrayOrderNotes.map((item) => {

          return (

            <div className='note-list' key={item.id}>
              
              <p> {item.note} </p>
              <button onClick={() => {deleteNotes(item.id)}}>
                <AiOutlineDelete />
            </button>
            
            <Link to={`/note/${item.id}`}><AiFillEdit></AiFillEdit></Link>
            </div>

          )
        })
        }
      </div>
    </>
  )
}

export default ListNotes;