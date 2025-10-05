// controllers/todoController.js
const Todo = require('../models/Todo');

// 取得所有待辦
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: '讀取失敗' });
  }
};

// 新增待辦
exports.addTodo = async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: '內容不能為空' });

  try {
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: '新增失敗' });
  }
};
