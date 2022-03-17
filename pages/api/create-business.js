export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  await prisma.business.create({
    data: {
      names: {
        create: {
          content: body.name,
        },
      },
    },
  });

  res.status(200).json({ data: "Business added to directory." });
}
