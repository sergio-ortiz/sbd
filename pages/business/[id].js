import Layout from "../../components/layout";
//import BusinessTable from "../../components/business-table";
import UpdateBusinessForm from "../../components/update-business-form";

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
  return (
    <Layout>
      <h2>Business, ID #{id} &#x1F454;</h2>

      {/* <BusinessTable body={results} /> */}
      <UpdateBusinessForm body={results} />
    </Layout>
  );
}
