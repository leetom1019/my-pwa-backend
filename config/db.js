// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:yourpassword@cluster0.xxxxx.mongodb.net/myPwaDb');
    console.log('✅ MongoDB 已連接');
  } catch (err) {
    console.error('❌ MongoDB 連接失敗:', err.message);
    process.exit(1); // 連不上就終止程式
  }
};

module.exports = connectDB;
