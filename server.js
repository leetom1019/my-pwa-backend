// server.js - 我的第一個 Node.js 後端伺服器
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 讓伺服器能接收 JSON 資料
app.use(express.json());

// 首頁
app.get('/', (req, res) => {
  res.send(`
    <h1>🚀 我的後端伺服器已啟動！</h1>
    <p>這是首頁，歡迎光臨！</p>
    <a href="/api/hello">前往 API 測試頁</a>
  `);
});

// API 測試路由
app.get('/api/hello', (req, res) => {
  res.json({ 
    message: '你好！這是從你的 Node.js 伺服器傳回來的資料！', 
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

// 啟動伺服器
app.listen(PORT, () => {
  console.log(`✅ 伺服器正在執行：http://localhost:${PORT}`);
  console.log(`📁 專案位置：C:\\Projects\\my-pwa-backend`);
});