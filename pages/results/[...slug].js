import Link from "next/link";
import prisma from "../../lib/prisma";
import Layout from "../../components/layout";

export async function getServerSideProps({ params }) {
  const slugIsJSON = (() => {
    try {
      JSON.parse(params.slug);
      return true;
    } catch {
      return false;
    }
  })();

  const parsed = slugIsJSON ? JSON.parse(params.slug) : { name: params.slug };

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

  const props = slugIsJSON ? { results, digest: params.slug } : { results };

  return { props };
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
