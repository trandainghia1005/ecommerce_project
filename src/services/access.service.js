"use strict";

const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const { log } = require("console");
const RoleShop = {
  SHOP: "shop",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};
const crypto = require("crypto");
class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      //step1 check email tồn tại
      const hodelShop = await shopModel.findOne({ email }).lena();
      if (hodelShop) {
        return {
          code: "xxxx",
          message: "shop already resgistered",
        };
      }
      const passwordHard = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password: passwordHard,
        roles: [RoleShop.SHOP],
      });
      if (newShop) {
        //tạo publickey, privatekey
        const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
          publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
          },
          privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
          },
        });
        console.log(publicKey);
        console.log(privateKey);
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
