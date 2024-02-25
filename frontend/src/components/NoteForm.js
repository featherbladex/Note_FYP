import { useState } from "react"
import { useNoteContext } from "../hooks/useNoteContext"

const NoteForm = () => {

    const {dispatch}= useNoteContext()
    const [note_title, set_title] = useState('')
    const [note_body, set_body] = useState('')
    const [error, set_error] = useState(null)

    const handleSubmit = async (e)=> {
        e.preventDefault()

        const new_note = {note_title, note_body}

        const response = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify(new_note),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            set_error(json.error)

        }
        if(response.ok){
            set_title('')
            set_body('')
            set_error(null)
            
            dispatch({type:'CREATE_NOTES', payload:json})
            console.log('new note added :)')
        }
    }

    return(
        <form className="create_note" onSubmit={handleSubmit}>
            <h3>Add New Note</h3>
            <label>Title</label>
            <input
                type="text"
                onChange={(e) => set_title(e.target.value)}
                value={note_title}
            />
             <label>Content</label>
            <input
                type="text"
                onChange={(e) => set_body(e.target.value)}
                value={note_body}
            />
            <button>Add New Note</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NoteForm