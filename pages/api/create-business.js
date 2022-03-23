export default async function handler(req, res) {
  const names = req.body.name.map((n, i) =>
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
