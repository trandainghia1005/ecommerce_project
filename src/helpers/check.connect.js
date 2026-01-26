"use strict";

const mongoose = require("mongoose");
const process = require("process");
const os = require("os");
const _SECONDS = 5000;
// count Connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  console.log(`Number of connection:${numConnection}`);
};
// check overload
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length;

    const numsCores = os.cpus().length;

    const memoryUsage = process.memoryUsage().rss;
    // example maximum number of connections based on number of cores
    const maxConnections = numsCores * 5;

    console.log(`Active connections: ${numConnection}`);
    console.log(`Memory usage: ${memoryUsage / 1024 / 1024}MB`);
    if (numConnection > maxConnections) {
      console.log("Connection overload detected");
    }
  }, _SECONDS); // Monitor every 5 seconds
};
module.exports = { countConnect, checkOverLoad };
