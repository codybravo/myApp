import { createContext, useReducer } from "react";

export const MetaDataContext = createContext();

const metaDataReducer = (state, action) => {
    
    switch (action.type) {
        case 'CREATE_METADATA':
            return {
                metaData: action.payload
            }
        case 'UPDATE_METADATA':
            return {
                metaData: action.payload
            }
        default:
            return {
                metaData: action.payload
            }
    }
}

export const MetaDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(metaDataReducer, {
        metaData: {}
    })

    return (
        <MetaDataContext.Provider value={{...state, dispatch}}>
            { children }
        </MetaDataContext.Provider>
    )
}
