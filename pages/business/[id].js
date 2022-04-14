import Layout from "../../components/layout";
import BusinessTable from "../../components/business-table";

export async function getServerSideProps(context) {
  const results = await prisma.business.findUnique({
    where: {
      id: parseInt(context.query.id),
    },
    include: {
      names: true,
    },
  });

  return {
    props: { results, id: context.query.id },
  };
}

export default function Success({ results, id }) {
  console.dir(results);
  return (
    <Layout>
      <h2>Business, ID #{id}: added to directory. &#x1F370;&#x1F389;</h2>
      <BusinessTable body={results} />
    </Layout>
  );
}
