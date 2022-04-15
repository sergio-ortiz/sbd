import decipher from "../../utils/decipher";
import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const body = req.body.cipherText
    ? await JSON.parse(decipher(req.body.cipherText))
    : req.body;

  const names = Array.isArray(body.name)
    ? body.name.map((n, i) =>
        i ? { content: n } : { content: n, official: true }
      )
    : { content: body.name, official: true };

  const [address, mailAddress] = Array.isArray(body.address)
    ? body.address
    : [body.address, body.address];

  const results = await prisma.business.create({
    data: {
      names: {
        create: names,
      },
      principalAddress: address,
      mailingAddress: mailAddress,
      year: parseInt(body.year),
      industry: body.industry,
    },
  });

  console.log(results.id);

  res.redirect(302, `/business/${results.id}`);
}
