import mongoose from 'mongoose';

const Schema = mongoose.Schema

const appUserDataSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    sheet_url:{
        type: String,
        required: true
    }

}, {timestamps: true})

const metaDataSchema = new Schema({
    version:{
        type: Number,
        required: true        
    },
    update:{
        type: Boolean,
        mandatory: true
    },
    
    overwrite:{
        type: Boolean,
        mandatory:true
    }
})

const appUserDataModel = mongoose.model('appUserData', appUserDataSchema);
const metaDataModel = mongoose.model('metaData', metaDataSchema);

export { appUserDataModel, metaDataModel }