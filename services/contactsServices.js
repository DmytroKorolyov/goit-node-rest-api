import Contact from "../models/Contact.js";


export const listContacts = () => Contact.find();
    


// export async function getContactById(contactId) {
//     const contacts = await listContacts();
//     const result = contacts.find(contact => contact.id === contactId);
//     return result || null
// }

// export async function removeContact(contactId) {
//     const contacts = await listContacts();
//     const index = contacts.findIndex(contact => contact.id === contactId);
//     if (index === -1) {
//         return null;
//     }
//     const [result] = contacts.splice(index, 1);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

//     return result
// }

// export async function addContact({name, email, phone}) {
//     const contacts = await listContacts();
//     const newContact = {
//         id: nanoid(),
//         name,
//         email,
//         phone,
//     };
//     contacts.push(newContact)
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return newContact
// }

// export async function updateContactById(id, data) {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === id);
//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { ...contacts[index], ...data };
//   await updateContact(contacts);
//   return contacts[index];
// }