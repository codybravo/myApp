import { AppUserDetailsContext } from "../context/AppUserDetailsContext";
import { MetaDataContext } from "../context/MetaDataContext"
import { useContext } from "react";

const contextCheck = (context, context_name) => {
    if (!context) {
        throw Error(`error in ${context_name} `)
    }
    return context
} 

const useAppUserDetailsContext = () => {
    return contextCheck(useContext(AppUserDetailsContext), "useAppUserDetailsContext")
}

const useMetaDataContext = () => {
    return contextCheck(useContext(MetaDataContext), "useMetaDataContext")
}



export { useAppUserDetailsContext, useMetaDataContext }