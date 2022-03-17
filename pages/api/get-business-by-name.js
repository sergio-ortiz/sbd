import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const body = req.body;

  const results = await prisma.name.findMany({
    where: {
      content: {
        equals: body.name,
      },
    },
  });

  if (!results[0]) {
    res.redirect("/api/create-business");
  } else {
    res.redirect(`/dym/${body.name}`);
  }
}
