const express = require("express");
const router = express.Router();
const { 
  getPeople, 
  getPersonById, 
  addPerson, 
  updatePerson, 
  deletePerson 
} = require('../controllers/people');

// Get all people
router.get("/", getPeople);

// Get a person by ID
router.get("/:id", getPersonById);

// Add a new person
router.post("/", addPerson);

// Update a person by ID
router.put("/:id", updatePerson);

// Delete a person by ID
router.delete("/:id", deletePerson);

module.exports = router;
