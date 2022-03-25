import decipher from "../../utils/decipher";
import prisma from "../../lib/prisma";
import Layout from "../../components/layout";
import AddBusinessForm from "../../components/add-business-form";

export async function getServerSideProps(context) {
  const digest = context.query.digest.join("/");
  const json = decipher(digest);
  const parsed = JSON.parse(json);
  const results = await prisma.business.findMany({
    where: {
      names: {
        some: {
          content: { in: parsed.name },
        },
      },
    },
    select: {
      names: {
        where: {
          official: true,
        },
      },
    },
  });

  const businesses = results.map((obj) => obj.names[0]);
  return {
    props: { businesses, digest },
  };
}

export default function results({ businesses, digest }) {
  businesses.forEach((obj) => console.dir(obj));
  return (
    <Layout>
      <h2>Found existing businesses in directory...</h2>
      <ul>
        {businesses.map((name, i) => (
          <li key={i}>{name.content}</li>
        ))}
      </ul>
      <h2>Would you like to add it?</h2>
      <AddBusinessForm cipherText={digest} />
    </Layout>
  );
}
