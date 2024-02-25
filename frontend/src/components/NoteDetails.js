const NoteDetails = ({ note })=> {

    return (
        <div className="note-details">
            <h4> {note.note_title}</h4>
            <p>{note.note_body}</p>
            <p>{note.createdAt}</p>
            <p>{note.updatedAt}</p>

        </div>
    )
}

export default NoteDetails