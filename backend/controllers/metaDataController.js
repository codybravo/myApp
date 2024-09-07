import { metaDataModel } from '../models/model.js';
import mongoose from 'mongoose';

// get all meta data
const getAllMetaData = async (req, res) => {
    const metaData = await metaDataModel.find({}).sort({createdAt: -1})
    res.status(200).json(metaData)
}

// create a new data 
const createMetaData = async (req, res) => {
    const { version, update, overwrite } = req.body

    let emptyFields = []

    if (!version) {
        emptyFields.push('version')
    }
    if (!update) {
        emptyFields.push('update')
    }
    if (!overwrite) {
        emptyFields.push('overwrite')
    }
    

    if (emptyFields.length) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const metaData = await metaDataModel.create({ version, update, overwrite })
        res.status(200).json(metaData)
    } catch (error) {
        res.status(400).json({ error: error.message })  
    }
}

// update a data
const updateMetaData = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Such Data"})
    }

    const metaData = await metaDataModel.findOneAndUpdate({ _id: id }, {...req.body})

    if(!metaData){
        return res.status(400).json({error: "No Such Data"})
    }
    res.status(200).json(metaData)
}

export { getAllMetaData, createMetaData, updateMetaData }