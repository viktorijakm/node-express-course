//defines routes for handling requests related to expenses
const express = require('express')
const router = express.Router()

const { getAllExpenses, createExpense } = require('../controllers/expenseController')

router.route('/').get(getAllExpenses).post(createExpense)

module.exports = router
