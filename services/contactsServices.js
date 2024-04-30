import Contact from "../models/Contact.js";


export const listContacts = () => Contact.find();
    


export const getContactById = async (contactId) => {
  const result = Contact.findById({_id: contactId});
  return result
}

export const removeContact = async (contactId) => Contact.findByIdAndDelete(contactId);

export const addContact = async (data) => Contact.create(data)

export const updateContactById = async (id, data) => Contact.findByIdAndUpdate(id, data)