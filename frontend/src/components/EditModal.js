import React from "react";

const EditModal = ({closeModal}) => {
    
    return(
        <div className="modalBackground">
            <div className="modalContent">
                <input type="text"/>
                <textarea/>
                <button onClick={() => closeModal(false)}>close</button>
                <button>save</button>
            </div>
        </div>
        
    )

}
export default EditModal