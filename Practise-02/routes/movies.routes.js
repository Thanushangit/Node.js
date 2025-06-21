import express from "express";
import {
  createMovies,
  deleteMovie,
  getMovie,
  getsinglemovie,
  updateMovie,
} from "../controllers/movie.controller.js";

const route = express.Router();

// it for the CRUD work

// this it the Read data
route.get("/getmovie", getMovie);

// get a single movie
route.get("/getsingle/:id", getsinglemovie);

// this it the Create data
route.post("/createmovie", createMovies);

// this it the update data
route.put("/updatemovie/:id", updateMovie);

// this it the detele data
route.delete("/deletemovie/:id", deleteMovie);

export default route;
