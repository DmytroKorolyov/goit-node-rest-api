import HttpError from "../helpers/HttpError.js";
import * as contactsService from "../services/contactsServices.js";
import { createContactSchema, updateContactSchema } from "../schemas/contactsSchemas.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";



// export const getAllContacts = async (req, res) => {
    
//     const result = await contactsService.listContacts();
//     res.json(result);
// };
      
const getAllContacts = async (req, res) => {
    const fields = "-createdAt -updatedAt";
    const { _id: owner } = req.user;
    const filter = { owner };
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    const settings = { skip, limit };
    const result = await contactsService.listContacts({filter, fields, settings });
    
    res.json(result)
}








export const getOneContact = async (req, res) => {
   
    const { id: _id } = req.params;
    const { _id: owner } = req.user;
        const result = await contactsService.getContactById({owner, _id});
        if (!result) {
            throw HttpError(404)
        }

        res.json(result);
    
};

export const deleteContact = async (req, res) => {
    
    const { id } = req.params;
        const { _id: owner } = req.user;

        const result = await contactsService.removeContact({owner, _id});
        if (!result) {
            throw HttpError(404, 'Not Found')
        }
        res.status(200).json(result)
    
};


export const createContact = async (req, res) => {
    const { _id: owner } = req.user;
        const result = await contactsService.addContact({...req.body, owner});

        res.status(201).json(result)
    
};

export const updateContact = async (req, res, ) => {
    
    const { id } = req.params;
    const { _id: owner } = req.user;
        const result = await contactsService.updateContactById({owner, _id}, id, req.body);
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