export default async function handler(req, res) {
  const body = req.body;

  await prisma.business.create({
    data: {
      names: {
        create: {
          content: body.name,
        },
      },
    },
  });

  res.redirect("/success");
}
