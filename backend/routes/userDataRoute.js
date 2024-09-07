import express from 'express';
import { getAllAppUserData, getSingleAppUserData, createAppUserData, deleteAppUserData, updateAppUserData } from '../controllers/userDataController.js'

const userDataRouter = express.Router()

// get all app user data
userDataRouter.get('/', getAllAppUserData)

// get single app user data
userDataRouter.get('/:id', getSingleAppUserData)

// POST an app user data
userDataRouter.post('/', createAppUserData)

// DELETE an app user data
userDataRouter.delete('/:id', deleteAppUserData)

// UPDATE an app user data
userDataRouter.patch('/:id', updateAppUserData)

export { userDataRouter }