import prisma from "../../lib/prisma";
import Layout from "../../components/layout";
import Results from "../../components/results";
import AddBusinessForm from "../../components/add-business-form";

export async function getServerSideProps({ params: { slug } }) {
  const slugIsJSON = (() => {
    try {
      JSON.parse(slug);
      return true;
    } catch {
      return false;
    }
  })();

  const parsed = slugIsJSON ? JSON.parse(slug) : { name: slug };

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

  const props = slugIsJSON ? { results, slug } : { results };

  return { props };
}

const results = ({ results, slug }) => {
  return (
    <Layout>
      <Results results={results} />
      {slug ? <AddBusinessForm json={slug} /> : ""}
    </Layout>
  );
};

export default results;
