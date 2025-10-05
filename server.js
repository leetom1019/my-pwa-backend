// server.js - 主入口檔案
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Step 1: 連接資料庫
connectDB();

// Step 2: 支援 JSON 請求
app.use(express.json());

// Step 3: 提供靜態檔案（index.html）
app.use(express.static(path.join(__dirname, 'public')));

// Step 4: 註冊路由
app.use('/api', require('./routes/todoRoutes')); // 所有 API 都在 /api 下

// 首頁路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 啟動伺服器
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ 伺服器正在執行：http://localhost:${PORT}`);
});
