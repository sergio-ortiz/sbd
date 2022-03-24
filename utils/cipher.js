require("dotenv").config();
const crypto = require("crypto");

export default function cipher(text) {
  const key = crypto.createCipher("aes128", process.env.PASSWORD);
  let cipherText = key.update(text, "utf8", "base64");
  cipherText += key.final("base64");
  return cipherText;
}
