import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const { id, data } = req.body;
  const updateBusiness = await prisma.business.update({
    where: {
      id,
    },
    data,
  });

  res.status(200).json(updateBusiness);
}
