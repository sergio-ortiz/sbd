import decipher from "../../utils/decipher";
import prisma from "../../lib/prisma";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import AddBusinessForm from "../../components/add-business-form";

export async function getServerSideProps(context) {
  const digest = context.query.digest;
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
    include: {
      names: {
        where: {
          official: true,
        },
      },
    },
  });

  return {
    props: { results },
  };
}

export default function results({ results }) {
  const router = useRouter();
  const { digest } = router.query;
  console.log(results);
  return (
    <Layout>
      <h3>Found existing business in directory, would you like to add it?</h3>
      <AddBusinessForm cipherText={digest} />
    </Layout>
  );
}
