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
      year: true,
      id: true,
    },
  });

  const businesses = results.map((obj) => ({
    officialName: obj.names[0],
    est: obj.year,
    id: obj.id,
  }));

  return {
    props: { businesses, digest },
  };
}

export default function results({ businesses, digest }) {
  return (
    <Layout>
      <h2>Found existing businesses in directory &#x1F4C1;</h2>
      <ul>
        {businesses.map((biz, i) => (
          <li key={i}>
            <a
              href={`/success/${biz.id}`}
            >{`${biz.officialName.content}, est. ${biz.est}`}</a>
          </li>
        ))}
      </ul>
      <h2>Would you like to add it?</h2>
      <AddBusinessForm cipherText={digest} />
    </Layout>
  );
}
