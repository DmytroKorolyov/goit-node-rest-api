import HttpError from "../helpers/HttpError.js";
import * as contactsService from "../services/contactsServices.js";
import { createContactSchema, updateContactSchema } from "../schemas/contactsSchemas.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";



export const getAllContacts = async (req, res) => {
    
    const result = await contactsService.listContacts();
    res.json(result);
      
    };

export const getOneContact = async (req, res) => {
   
        const { id } = req.params
        const result = await contactsService.getContactById(id);
        if (!result) {
            throw HttpError(404)
        }

        res.json(result);
    
};

export const deleteContact = async (req, res) => {
    
        const { id } = req.params;
        const result = await contactsService.removeContact(id);
        if (!result) {
            throw HttpError(404, 'Not Found')
        }
        res.status(200).json(result)
    
};


export const createContact = async (req, res) => {
    
        const result = await contactsService.addContact(req.body);

        res.status(201).json(result)
    
};

export const updateContact = async (req, res, ) => {
    
         const { id } = req.params;
        const result = await contactsService.updateContactById(id, req.body);
        if (!result) {
            throw HttpError(404)
        }
        res.json(result)
              
    };


export default {
    getAllContacts: ctrlWrapper(getAllContacts),
    getOneContact: ctrlWrapper(getOneContact),
    createContact: ctrlWrapper(createContact),
    updateContact: ctrlWrapper(updateContact),
    deleteContact: ctrlWrapper(deleteContact),
}