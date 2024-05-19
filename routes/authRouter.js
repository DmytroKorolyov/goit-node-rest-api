import express from "express"
import authControllers from "../controllers/authControllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import { userSignupSchema, userSubscriptionSchema, userEmailSchema } from "../schemas/authSchemas.js";
import validateBody from "../helpers/validateBody.js";
import authenticate from "../middlewares/authenticate.js";
import upload from "../middlewares/upload.js";


const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), authControllers.signup)
authRouter.get("/verify/:verificationToken", authControllers.verify);
authRouter.post("/verify", isEmptyBody, validateBody(userEmailSchema), authControllers.resendEmail);
authRouter.post("/signin", validateBody(userSignupSchema), authControllers.signin)
authRouter.get("/current", authenticate, authControllers.getCurrent);
authRouter.post("/signout", authenticate, authControllers.signout);

authRouter.patch("/avatars", authenticate, upload.single("avatar"), authControllers.updateAvatar);


export default authRouter