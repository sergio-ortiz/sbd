require("dotenv").config();
const crypto = require("crypto");

export default function cipher(text) {
  const cipher = crypto.createCipheriv("aes-128-ecb", process.env.KEY, null);
  const cipherText = cipher.update(text, "utf8", "hex") + cipher.final("hex");
  return cipherText;
}
