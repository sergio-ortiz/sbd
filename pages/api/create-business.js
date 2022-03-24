import decipher from "../../utils/decipher";

export default async function handler(req, res) {
  const body = req.body.cipherText
    ? await JSON.parse(decipher(req.body.cipherText))
    : req.body;

  const names = body.name.map((n, i) =>
    i ? { content: n } : { content: n, official: true }
  );

  await prisma.business.create({
    data: {
      names: {
        create: names,
      },
    },
  });

  res.redirect("/success");
}
