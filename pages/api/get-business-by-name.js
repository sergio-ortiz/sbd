import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const body = JSON.parse(req.body);

  const result = await prisma.name.findMany({
    where: {
      content: {
        equals: body.name,
      },
    },
  });

  if (result[0]) {
    res.status(400).json({ data: `${body.name} is not available` });
  } else {
    const created = await prisma.business.create({
      data: {
        names: {
          create: {
            content: body.name,
          },
        },
      },
    });

    res.status(200).json({ data: "success" });
  }
}
