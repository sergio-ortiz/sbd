import decrypt from "../../utils/decrypt";

export default async function handler(req, res) {
  const body = req.body.cipher
    ? JSON.parse(decrypt(req.body.cipher))
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
