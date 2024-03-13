import { createContext, useReducer } from "react";

export const NoteContext = createContext()

export const NotesReducer = (state, action) => {
    switch(action.type){
        case 'SET_NOTES':
            return{
                notes:  action.payload
            }
        case 'CREATE_NOTES':
            return{
                notes:  [action.payload, ...state.notes]
            }
        case 'DELETE_NOTE':
            return{
                notes:  state.notes.filter((note) => note._id !== action.payload._id)
            }
        case 'UPDATE_NOTE':
            return{
                notes: state.notes.map((note) =>  note._id === action.payload._id ? action.payload : note)
            }            
        default:
            return state
        
    }
}

export const NoteContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(NotesReducer,{
        notes: null
    })

    return(
        <NoteContext.Provider value={{...state, dispatch}}>
            { children }
        </NoteContext.Provider>
    )
}