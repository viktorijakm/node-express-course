//handling requests get all expenses and creat new ones
const getAllExpenses = (req, res) => {
    res.status(200).json({ message: 'Get all expenses' })
  }
  
  const createExpense = (req, res) => {
    res.status(201).json({ message: 'Expense created' })
  }
  
  module.exports = { getAllExpenses, createExpense }
  