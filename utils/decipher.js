require("dotenv").config();
const crypto = require("crypto");

export default function decipher(cipherText) {
  const cipher = crypto.createDecipheriv("aes-128-ecb", process.env.KEY, null);
  const plainText =
    cipher.update(cipherText, "base64", "utf8") + cipher.final("utf8");
  return plainText;
}
