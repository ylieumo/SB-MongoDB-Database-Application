import express from "express";
import db from "../db/conn.mjs";
import Question from '../models/questions.mjs'

const router = express.Router();

//add a new question
router.post("/questions", async (req, res) => {
  try {
    const question = await Question.create(req.body);
    res.status(200).json(question);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


//get all questions
router.get("/questions", async (req, res) => {
  try {
   
    const questions = await Question.find()

    res.send("questions");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "question document not available" });
  }
});


//get one question 
router.get("/questions/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Question.findById(id)
    .then((result) => {
      console.log(result);
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
    });
});

//delete a question item
router.delete("/questions/:id", (req, res) => {
  const id = req.params.id;
  Question.findByIdAndDelete(id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error: "Did not delete" });
    });
});

//update a question item
router.patch("/questions/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const question = await Question.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true },
    );
    console.log(question);

    res.json({ question });
  } catch (error) {
    console.log(error);
  }
});

  



export default router;