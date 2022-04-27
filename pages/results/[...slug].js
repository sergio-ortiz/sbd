import Link from "next/link";
import prisma from "../../lib/prisma";
import Layout from "../../components/layout";

export async function getServerSideProps({ params }) {
  const results = await prisma.business.findMany({
    where: {
      names: {
        some: {
          content: { in: params.slug },
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

  return { props: { results } };
}

const results = ({ results }) => {
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
    </Layout>
  );
};

export default results;
