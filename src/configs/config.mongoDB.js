"use strick";
// lv0
// const config = {
//   app: {
//     port: 3000,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "ecommerce_project",
//   },
// };

// lv2
// const dev = {
//   app: {
//     port: 3005,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "dev_db",
//   },
// };
// const product = {
//   app: {
//     port: 3005,
//   },
//   db: {
//     host: "localhost",
//     port: 27017,
//     name: "product_db",
//   },
// };
// const config = { dev, product };
// const env = process.env.NODE_ENV || "dev";
// module.exports = config[env];

// lv3
const dev = {
  app: {
    port: process.env.DEV_DB_PORT || 3050,
  },
  db: {
    host: process.env.DEV_DB_LOCALHOST || "localhost",
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || "dev_db",
  },
};
const product = {
  app: {
    port: process.env.PRODUCT_DB_PORT || 3000,
  },
  db: {
    host: process.env.PRODUCT_DB_HOST || "localhost",
    port: process.env.PRODUCT_DB_PORT || 27017,
    name: process.env.PRODUCT_DB_NAME || "product_db",
  },
};
const config = { dev, product };
const env = process.env.NODE_ENV || "dev";
console.log("configenv", config[env]);

module.exports = config[env];
