const crypto = require("crypto");

export default function decrypt(cipher) {
  const myKey = crypto.createDecipher("aes128", "pass");
  let myStr = myKey.update(cipher, "base64", "utf8");
  myStr += myKey.final("utf8");
  return myStr;
}
