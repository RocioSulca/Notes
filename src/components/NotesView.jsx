// import { useState } from "react";
import ListNotes from "./listNotes/ListNotes";
import AddNotes from "./modalNote/AddNotes";
// import { AiOutlinePlusCircle, AiOutlineSchedule } from "react-icons/ai";

function NotesView() {


    return (


        <>
            <AddNotes  />
            <ListNotes />
        </>
    )
}

export default NotesView;