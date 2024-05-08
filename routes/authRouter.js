import express from "express"
import authControllers from "../controllers/authControllers.js";
import isEmptyBody from "../middlewares/isEmptyBody.js";
import { userSignupSchema, userSubscriptionSchema } from "../schemas/authSchemas.js";
import validateBody from "../helpers/validateBody.js";
import authenticate from "../middlewares/authenticate.js";


const authRouter = express.Router();

authRouter.post("/signup", validateBody(userSignupSchema), authControllers.signup)
authRouter.post("/signin", validateBody(userSignupSchema), authControllers.signin)
authRouter.get("/current", authenticate, authControllers.getCurrent);
authRouter.post("/signout", authenticate, authControllers.signout);


export default authRouter