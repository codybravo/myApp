import Navbar from "../components/Navbar"
import {MetaDataForm, MetaDataDetails} from "../components/MetaData"
import { useState, useEffect } from "react"
import { useMetaDataContext } from "../hooks/useContext";

const AppMetaData = () => {
    const { metaData, dispatch } = useMetaDataContext()
    const [component, setComponent] = useState('details')

    // console.log(metaData)

    const changeComponent = (componentName) => {
        console.log(metaData,"changeComponent")
        // while(!Object.keys(metaData).length){
        //     console.log(componentName)
        //     if(Object.keys(metaData).length){
        //         break
        //     }
        // }
        setComponent(componentName)
    } 

    useEffect(() => {
        const fetchMetaData = async () => {
            const response = await fetch('/api/meta-data');
            const json = await response.json();
            
            if (response.ok && json.length >= 1){
                dispatch({ type: 'UPDATE_METADATA', payload: json[0]})
            }
        } 

        fetchMetaData()
    },[])
    

    return (
        <div className="pages">
            <Navbar />
            {Object.keys(metaData).length && metaData._id && component !== 'form' && <MetaDataDetails metaData={metaData} changeComponent={changeComponent} />}
            {Object.keys(metaData).length && metaData._id && component === 'form' && <MetaDataForm metaData={metaData} changeComponent={changeComponent} />}
            {(!Object.keys(metaData).length || !metaData._id) && <MetaDataForm metaData={metaData} changeComponent={changeComponent} />}
        </div>
    )
}

export default AppMetaData