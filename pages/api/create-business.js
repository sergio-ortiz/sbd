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

  class POC {
    constructor(name, phone, email) {
      this.name = name;
      this.phone = phone;
      this.email = email;
    }
  }

  const ceo = new POC();
  const other = new POC();

  ({
    poc: [ceo.name, other.name],
    phone: [ceo.phone, other.phone],
    email: [ceo.email, other.email],
  } = body);

  await prisma.business.create({
    data: {
      names: {
        create: names,
      },
      principalAddress: address,
      mailingAddress: mailAddress,
      ceo: ceo.name || null,
      ceoPhone: ceo.phone || null,
      ceoEmail: ceo.email || null,
      otherPoc: other.name || null,
      otherPocPhone: other.phone || null,
      otherPocEmail: other.email || null,
      tin: parseInt(body.tin) || null,
      womanOwned: "womanOwned" in body,
      veteranOwned: "veteranOwned" in body,
      minorityCertified: "minorityCertified" in body,
      year: parseInt(body.year),
      type: body.type || null,
      employees: parseInt(body.employees) || null,
      revenue: parseInt(body.revenue) || null,
      industry: body.industry,
      naicsCode: parseInt(body.naics) || null,
    },
  });

  console.log(body);

  res.redirect("/success");
}
