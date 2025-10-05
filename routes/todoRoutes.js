// routes/todoRoutes.js
const express = require('express');
const router = express.Router();

// 引入控制器
const { getTodos, addTodo } = require('../controllers/todoController');

// 定義路由
router.get('/todos', getTodos);
router.post('/todos', addTodo);

module.exports = router;
