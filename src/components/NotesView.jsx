import ListNotes from "./ListNotes";
import AddNotes from "./createNotes/AddNotes";

function NotesView() {
    return (
        <>
            <AddNotes  />
            <ListNotes />
        </>
    )
}

export default NotesView;