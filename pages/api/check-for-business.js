import prisma from "../../lib/prisma";
import cipher from "../../utils/cipher";

export default async function handler(req, res) {
  const results = await prisma.name.findMany({
    where: {
      content: { in: req.body.name },
    },
  });

  if (!results[0]) {
    res.redirect("/api/create-business");
  } else {
    const json = await JSON.stringify(req.body);
    const cypherText = await cipher(json);
    res.redirect(`/collisions/${cypherText}`);
  }
}
