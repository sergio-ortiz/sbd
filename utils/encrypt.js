const crypto = require("crypto");

export default function encrypt(string) {
  const myKey = crypto.createCipher("aes128", "pass");
  let myStr = myKey.update(string, "utf8", "base64");
  myStr += myKey.final("base64");
  return myStr;
}
