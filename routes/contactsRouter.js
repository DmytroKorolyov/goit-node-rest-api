import express from "express";
import contactsControllers from "../controllers/contactsControllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import isValidId from "../middlewares/isValidId.js";
import { createContactSchema, updateContactSchema } from "../schemas/contactsSchemas.js";
import validateBody from "../helpers/validateBody.js";

const contactsRouter = express.Router();

contactsRouter.get("/", contactsControllers.getAllContacts);

contactsRouter.get("/:id", isValidId, contactsControllers.getOneContact);

contactsRouter.delete("/:id", isValidId, contactsControllers.deleteContact);

contactsRouter.post("/", isEmptyBody, validateBody(updateContactSchema), contactsControllers.createContact);

contactsRouter.put("/:id", isValidId,  isEmptyBody, validateBody(updateContactSchema), contactsControllers.updateContact);

export default contactsRouter;