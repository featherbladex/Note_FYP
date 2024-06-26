import { useState } from "react"
import { useNoteContext } from "../hooks/useNoteContext"

const NoteForm = () => {

    const {dispatch}= useNoteContext()
    const [note_title, set_title] = useState('')
    const [note_body, set_body] = useState('')
    const [error, set_error] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])
    
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
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            set_title('')
            set_body('')
            set_error(null)
            setEmptyFields([])

            dispatch({type:'CREATE_NOTES', payload:json})
            console.log(new_note)

        }
    }

    return(
        <form className="create_note" onSubmit={handleSubmit}>
            <h3>Add New Note</h3>
            <label id="title_label">Title</label>
            <input
                id="title_input"
                type="text"
                onChange={(e) => set_title(e.target.value)}
                value={note_title}
                className={emptyFields.includes('note_title') ? 'error' : ''}
            />
             <label id="content_label">Content</label>
             <textarea 
                id="content_input"
                onChange={(e) => set_body(e.target.value)}
                value={note_body}
                className={emptyFields.includes('note_body') ? 'error' : ''}
             />
             <br></br>           
            <button>Add New Note</button>
            {error && <div className="error">{error}</div>} 
        </form>
       
        
    )
}

export default NoteForm