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

  const [address, mailAddress] = Array.isArray(body.address)
    ? body.address
    : [body.address, body.address];

  await prisma.business.create({
    data: {
      names: {
        create: names,
      },
      tin: parseInt(body.tin) || null,
      year: parseInt(body.year),
      principalAddress: address,
      mailingAddress: mailAddress,
      employees: parseInt(body.employees) || null,
      revenue: parseInt(body.revenue) || null,
      industry: body.industry,
      naicsCode: parseInt(body.naics) || null,
    },
  });

  console.log(body);

  res.redirect("/success");
}
