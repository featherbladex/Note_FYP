import React from "react";
import { useState } from "react";

const EditModal = ({closeModal,note_title,note_body,handleEdit}) => {
    const [title,setNoteTitle] = useState(note_title)
    const [body,setNoteBody] = useState(note_body)

    

    return(
        <div className="modalBackground">
            <form className="edit" id="edit_form" onSubmit={(e)=>{
                e.preventDefault()
                console.log('hello from edit modal')
                console.log(title,body)
                
                handleEdit(title,body)
                closeModal(false)
            }}>
                <div className="modalContent">
                    <label>Title</label>
                    <input 
                        type="text"
                        value = {title}
                        onChange={(e) => setNoteTitle(e.target.value)}
                    />

                    <label>Content</label>
                    <textarea
                        value= {body}
                        onChange={(e) => setNoteBody(e.target.value)}
                    />
                    <button onClick={() => closeModal(false)}>close</button>
                    <button form="edit_form">save</button>
                </div>   
            </form>
            
        </div>
        
    )

}
export default EditModal