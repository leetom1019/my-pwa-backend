// server.js - 加入 MongoDB 的版本
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// 支援 JSON 請求
app.use(express.json());
app.use(express.static('public'));

// Todo 模型（資料結構）
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const Todo = mongoose.model('Todo', todoSchema);

// 連接 MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:yourpassword@cluster0.xxxxx.mongodb.net/myPwaDb')
  .then(() => console.log('✅ MongoDB 已連接'))
  .catch(err => console.error('❌ MongoDB 連接失敗:', err));

// 首頁
app.get('/', (req, res) => {
  res.send(`
    <h1>📝 待辦清單 API</h1>
    <p>後端伺服器運作中！</p>
    <a href="/api/todos">查看所有待辦事項</a>
  `);
});

// 取得所有待辦
app.get('/api/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: '讀取失敗' });
  }
});

// 新增待辦
app.post('/api/todos', async (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: '內容不能為空' });

  try {
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ message: '新增失敗' });
  }
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`✅ 伺服器正在執行：http://localhost:${PORT}`);
});
