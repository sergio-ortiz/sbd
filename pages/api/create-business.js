import decipher from "../../utils/decipher";

export default async function handler(req, res) {
  const body = req.body.cipherText
    ? await JSON.parse(decipher(req.body.cipherText))
    : req.body;

  const names = Array.isArray(body.name)
    ? body.name.map((n, i) =>
        i ? { content: n } : { content: n, official: true }
      )
    : { content: body.name, official: true };

  await prisma.business.create({
    data: {
      names: {
        create: names,
      },
      year: parseInt(body.year),
      principalAddress: `${body.street} ${body.city}, ${body.county} County, ${body.state}`,
      industry: body.industry,
    },
  });

  res.redirect("/success");
}
