import { useNoteContext } from "../hooks/useNoteContext"

const NoteDetails = ({ note })=> {
    const {dispatch} = useNoteContext()
    const handleDelete = async () => {
        const response = await fetch('/api/notes/' + note._id,{
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_NOTE', payload: json})
        }
    }

    const handleEdit = async () =>{
        const response = await fetch('/api/notes/' + note._id,{
            method: 'PATCH'
        })

        const json = await response.json()

        if (response.ok){
            
            dispatch({type: 'UPDATE_NOTE', payload: json})
        }


    }
    
    return (
        <div className="note-details">
            <h4> {note.note_title}</h4>
            <p>{note.note_body}</p>
            <p>{note.createdAt}</p>
            <p>{note.updatedAt}</p>
            <span id="edit" onClick={handleEdit}>Edit Note</span>
            <span id="delete" onClick={handleDelete}>Delete Note</span>
            
        </div>
    )
}

export default NoteDetails