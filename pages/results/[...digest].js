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
  return {
    props: { results, digest },
  };
}

export default function results({ results, digest }) {
  console.log(results);
  return (
    <Layout>
      <h3>Found existing business in directory, would you like to add it?</h3>
      <AddBusinessForm cipherText={digest} />
    </Layout>
  );
}
