import prisma from "../../lib/prisma";
import encrypt from "../../utils/encrypt";

export default async function handler(req, res) {
  const body = req.body;

  const json = await JSON.stringify(req.body);
  const cipher = await encrypt(json);

  const results = await prisma.name.findMany({
    where: {
      content: body.name[0],
    },
  });

  if (!results[0]) {
    res.redirect("/api/create-business");
  } else {
    res.redirect(`/dym/${cipher}`);
  }
}
