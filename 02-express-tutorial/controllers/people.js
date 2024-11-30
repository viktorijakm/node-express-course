const { people } = require('../data');

// Get all people
const getPeople = (req, res) => {
  res.json(people);
};

// Get a person by ID
const getPersonById = (req, res) => {
  const { id } = req.params;
  const person = people.find(p => p.id === id); // Convert to number

  if (person) {
    return res.status(200).json(person);
  } else {
    return res.status(404).json({ message: "Person not found" });
  }
};

// Add a new person
const addPerson = (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide a name" });
  }

  const newPerson = { id: people.length + 1, name }; // Simple ID generation
  people.push(newPerson);
  return res.status(201).json({ success: true, person: newPerson });
};

// Update a person by ID
const updatePerson = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide a name to update" });
  }

  const person = people.find(p => p.id === parseInt(id));
  
  if (person) {
    person.name = name;
    return res.status(200).json({ success: true, updatedPerson: person });
  } else {
    return res.status(404).json({ message: "Person not found" });
  }
};

// Delete a person by ID
const deletePerson = (req, res) => {
  const { id } = req.params;
  const personIndex = people.findIndex(p => p.id === parseInt(id));
  
  if (personIndex !== -1) {
    people.splice(personIndex, 1); // Remove person from array
    return res.status(200).json({ success: true, message: "Person deleted" });
  } else {
    return res.status(404).json({ message: "Person not found" });
  }
};

module.exports = { getPeople, getPersonById, addPerson, updatePerson, deletePerson };
