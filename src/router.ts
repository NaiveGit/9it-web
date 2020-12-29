import express from "express";

export const fetchRouter = express.Router();

fetchRouter.get('/', (req, res, next) => {

    res.send("fetch router");

});
