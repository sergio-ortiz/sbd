require("dotenv").config();
const crypto = require("crypto");

export default function decipher(cipherText) {
  const key = crypto.createDecipher("aes128", process.env.PASSWORD);
  let plainText = key.update(cipherText, "hex", "utf8");
  plainText += key.final("utf8");
  return plainText;
}
