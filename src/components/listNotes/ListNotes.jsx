import './listNotes.css'
import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs, query } from "firebase/firestore";

function Notes() {

  const [arrayOrderNotes, setArrayOrderNotes] = useState([]);

  const getOrdersFirebase = async () => {
    const arrayProduct = [];
    const querySnapshot = await getDocs(query(collection(db, "Notes")));
    querySnapshot.forEach((doc) => {
      arrayProduct.push({ id: doc.id, ...doc.data() });
    });
    return setArrayOrderNotes(arrayProduct);
  };

  getOrdersFirebase();


  return (
    <>
      <div className="notes-list-container" >
        {arrayOrderNotes.map((item, index) => {

          return (

            <div className='note-list' key={index}>
              <h3> {item.title} </h3>
              <p> {item.note} </p>
            </div>

          )
        })
        }
      </div>
    </>
  )
}

export default Notes;