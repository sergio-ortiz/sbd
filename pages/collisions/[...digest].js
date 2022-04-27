import Link from "next/link";
import prisma from "../../lib/prisma";
import Layout from "../../components/layout";
import AddBusinessForm from "../../components/add-business-form";

export async function getServerSideProps({ params }) {
  const parsed = JSON.parse(params.digest);
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

  return { props: { results, digest: params.digest } };
}

const results = ({ results, digest }) => {
  return (
    <Layout>
      <h2>Found matching businesses in directory &#x1F4C1;</h2>
      <ul>
        {results.map(({ id, names, year }) => (
          <li key={id}>
            <Link href={`/business/${id}`}>
              <a>{`${names[0].content}, est. ${year}`}</a>
            </Link>
          </li>
        ))}
      </ul>
      <h2>Would you like to add it?</h2>
      <AddBusinessForm json={digest} />
    </Layout>
  );
};

export default results;
