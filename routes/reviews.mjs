import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import Reviews from '../models/reviews.mjs'

const router = express.Router();

//add a new reviews
router.post("/reviews", async (req, res) => {
    try {
      const reviews = await Reviews.create(req.body);
      res.status(200).json(reviews);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
  
  
  //get all reviews
  router.get("/reviews", async (req, res) => {
    try {
     
      const reviews = await Reviews.find()
  
      res.send("reviews");
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "reviews document not available" });
    }
  });
  
  
  //get one reviews 
  router.get("/reviews/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await Reviews.findById(id)
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  
  //delete a reviews item
  router.delete("/reviews/:id", (req, res) => {
    const id = req.params.id;
    Reviews.findByIdAndDelete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "Did not delete" });
      });
  });
  
  //update a reviews item
  router.patch("/reviews/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const reviews = await Reviews.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true },
      );
      console.log(reviews);
  
      res.json({ reviews });
    } catch (error) {
      console.log(error);
    }
  });
  


export default router;