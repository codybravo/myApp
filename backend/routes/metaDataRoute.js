import express from 'express';
import { getAllMetaData, createMetaData, updateMetaData } from '../controllers/metaDataController.js'

const metaDataRouter = express.Router()

// get all app meta data
metaDataRouter.get('/', getAllMetaData)

// POST an app meta data
metaDataRouter.post('/', createMetaData)

// UPDATE an app meta data
metaDataRouter.patch('/:id', updateMetaData)

export { metaDataRouter }
