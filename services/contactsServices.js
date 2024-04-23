import fs from "fs/promises";
import { nanoid } from "nanoid";
import path from "path";

const contactsPath = path.resolve("db", "contacts.json");
const updateContact = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


export async function listContacts() {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
}

export async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    return result || null
}

export async function removeContact(contactId) {
    const contacts = await listContacts();
    const index = contacts.findIndex(contact => contact.id === contactId);
    if (index === -1) {
        return null;
    }
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));

    return result
}

export async function addContact({name, email, phone}) {
    const contacts = await listContacts();
    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    };
    contacts.push(newContact)
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact
}

export async function updateContactById(id, data) {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === id);
  if (index === -1) {
    return null;
  }
  contacts[index] = { ...contacts[index], ...data };
  await updateContact(contacts);
  return contacts[index];
}