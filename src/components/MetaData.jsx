import { useEffect, useState } from "react"
import { useMetaDataContext } from "../hooks/useContext";
import GPicker from "./GooglePicker"

const MetaDataForm = ({ metaData , changeComponent}) => {
    const { dispatch } = useMetaDataContext()
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState(metaData)

    const [emptyFields, setEmptyFields] = useState([])

    const handleFormSubmit = async (e) => {
        console.log("Meta Data Form Submitted")
        if(formData._id){
            e.preventDefault()
        }
        

        const url = formData._id ? `/api/meta-data/${formData._id}` : `/api/meta-data/` ;

        const response = await fetch( url , {
            method: formData._id ? 'PATCH' : 'POST', 
            body: JSON.stringify(formData),
            headers: {
                'content-type': 'application/json'
            }
        })

        const json = await response.json()
        
        if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }

        if (response.ok){
            setEmptyFields([])
            setError(null)
            dispatch({ type: 'UPDATE_METADATA', payload: formData })
            changeComponent('details');
        }        
    }

    const handleCancel = () => {
        changeComponent('details')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if(e.target.type === "checkbox"){
            setFormData({
              ...formData,
              [name]: e.target.checked,
            });
        }else{
            setFormData({
              ...formData,
              [name]: value,
            });           
        }
    };

    return (
        <form className="meta-data" onSubmit={handleFormSubmit}>
            <h1>User Meta Data</h1>

            <label>Google Drive</label>
            <GPicker/>
            
            <label>Version</label>
            <input
                name="version" 
                type="number" 
                onChange={handleChange}
                value={formData.version}
                className={emptyFields.includes("version") ? 'error' : ''}
            />

            <label>Update</label>
            <input
                name="update" 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.update}
                className={emptyFields.includes("update") ? 'error' : ''}
            />

            <label>Overwrite</label>
            <input
                name="overwrite" 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.overwrite}
                className={emptyFields.includes("overwrite") ? 'error' : ''}
            />

            {formData._id ? (
              <>
                <button type="submit">Update</button>
                <button type="button" onClick={handleCancel}>Cancel</button>
              </>
            ) : (
                <button type="submit">Add</button>
            )}
            {/* <button>Add App User</button> */}
            { error && <div className="error">{error}</div> }

        </form>
    )
}

const MetaDataDetails = ({ metaData, changeComponent }) => {
    const handleUpdate = () => {
        changeComponent('form')
    }

    return (
        <div className="metaDataDetails">
            <h4>App Details</h4>
            <label htmlFor="version">Version</label>
            <p name="version">{metaData.version}</p>
            <label htmlFor="update">Update</label>
            <input type="checkbox" name="update" checked={metaData.update} readOnly />
            <label htmlFor="overwrite">Overwrite</label>
            <input type="checkbox" name="overwrite" checked={metaData.overwrite} readOnly />
            <button type="button" onClick={handleUpdate}>Update</button>
        </div>
    )
    
}

export {MetaDataForm,MetaDataDetails} 