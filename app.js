import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config"

import authRouter from "./routes/authRouter.js";
import contactsRouter from "./routes/contactsRouter.js";

const {DB_HOST, PORT = 3000} = process.env

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api/auth', authRouter)
app.use("/api/contacts", contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


mongoose.connect(DB_HOST)
  .then(() => {

  
  app.listen(PORT, () => {

  console.log(`Server is running. Use our API on port: ${PORT}`);
});
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1)
})






// gUqaM-3G*sycQBm

// 03A4CB5FDC0912C268423DC0BC5B9A2B76A29EE9C663EC4A38E03C4A12D2466C144A4E9DE3CFC3138FE21F0E8EA828B9





// E77B919F0931B1C0F74B9453E74DE61B00C0BA743464902B8970EECC89A1BD0B2CCB4B7C38EADBA8F9B851A73AC99A9E


// пароль 
// 4scBroip9RGnXAwQ