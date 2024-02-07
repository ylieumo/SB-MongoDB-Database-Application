import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import Users from '../models/users.mjs'

const router = express.Router();

//add a new users
router.post("/users", async (req, res) => {
    try {
      const users = await Users.create(req.body);
      res.status(200).json(users);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  
  //get all users
  router.get("/users", async (req, res) => {
    try {
     
      const users = await Users.find()
  
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "users document not available" });
    }
  });
  
  
  //get one users 
  router.get("/users/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await Users.findById(id)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //delete a users item
  router.delete("/users/:id", (req, res) => {
    const id = req.params.id;
    Users.findByIdAndDelete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Did not delete" });
      });
  });
  
  //update a users item
  router.patch("/users/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const users = await Users.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true },
      );
      console.log(users);
  
      res.json({ users});
    } catch (error) {
      console.log(error);
    }
  });


export default router;