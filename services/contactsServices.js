import Contact from "../models/Contact.js";


// export const listContacts = () => Contact.find();
export const listContacts = ({ filter = {}, fields, setting = {} }) => Contact.find(filter, fields, setting).populate("owner", "email");

    


// export const getContactById = async (contactId) => {
//   const result = Contact.findById({_id: contactId});
//   return result
// }

export const getContactById = filter => Contact.findOne(filter);



export const removeContact = async (filter) => Contact.findByIdAndDelete(filter);

export const addContact = (data) => Contact.create(data)

export const updateContactById = (filter, data) => Contact.findByIdAndUpdate(filter, data);