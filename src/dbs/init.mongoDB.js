"use strict";
// import thư viện
const mongoose = require("mongoose");
//lưu địa chỉ db
const connectString = `mongodb://localhost:27017/ecommerce_project`;
// Singleton Pattern
const { countConnect } = require("../helpers/check.connect");
class Database {
  constructor() {
    this.connect();
  }

  connect(type = "mongodb") {
    // Bật debug mode
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, {
        //số lượng kết nối tối đa trong connection pool
        maxPoolSize: 50,
      })
      .then((_) => console.log("Connected MongoDB Success", countConnect()))
      .catch((err) => console.log("Error Connect:", err));
    // Lắng nghe events
    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected!");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB error:", err);
    });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;
