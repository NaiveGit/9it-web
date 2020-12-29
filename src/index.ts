import express from "express";

import { fetchRouter } from "./router";

const app = express();

/* routers */
app.use('/fetch', fetchRouter);

app.listen(8000, () => {
   console.log("server started"); 
});
