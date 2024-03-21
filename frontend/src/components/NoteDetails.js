import { useState } from "react"
import { useNoteContext } from "../hooks/useNoteContext"
import EditModal from "./EditModal"

const NoteDetails = ({ note })=> {
    const {dispatch} = useNoteContext()
    const [editModal, setEditModal] = useState(false)

    //const [error, setError] = useState(null)

    const handleDelete = async () => {
        const response = await fetch('/api/notes/' + note._id,{
            method: 'DELETE'
        })

        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_NOTE', payload: json})
        }
    }

    

    const handleEdit = async(title,body) =>{

        note.note_title=title
        note.note_body=body
              

        console.log("hello from handleEdit");
        console.log(note.note_title,note.note_body);
        
       const response = await fetch('/api/notes/' + note._id,{
            method: 'PATCH',
            body: JSON.stringify(note),
            headers:{
                'Content-Type':'application/json'
            }
        })

        const json = await response.json()


        if (response.ok){ 
            dispatch({type: 'UPDATE_NOTE', payload: json})
            console.log(json)
                   
        }


    }
    
    return (
        <div className="note-details">
            <h4> {note.note_title}</h4>
            <p>{note.note_body}</p>

            {editModal && <EditModal 
                closeModal={setEditModal} 
                note_title={note.note_title}
                note_body={note.note_body}
                handleEdit={handleEdit}
            />}

            <p>{note.createdAt}</p>
            <p>{note.updatedAt}</p>

            <span id="edit" onClick={()=>{setEditModal(true)}}>Edit Note</span>
            <span id="delete" onClick={handleDelete}>Delete Note</span>
            
            
        </div>
    )
}

export default NoteDetails