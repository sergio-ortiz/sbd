import prisma from "../../lib/prisma";

export async function getServerSideProps({ query }) {
  const results = await prisma.business.findMany({
    where: {
      names: {
        some: {
          content: query.query,
        },
      },
    },
  });

  return { props: { results: JSON.stringify(results) } };
}

const results = ({ results }) => <>{results}</>;

export default results;
