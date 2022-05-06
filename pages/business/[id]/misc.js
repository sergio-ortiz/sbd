import prisma from "../../../lib/prisma";
import Layout from "../../../components/layout";
import AddInfoForm from "../../../components/add-info-form";

export async function getServerSideProps(context) {
  const results = await prisma.business.findUnique({
    where: {
      id: parseInt(context.query.id),
    },
    include: {
      names: true,
    },
  });

  return { props: { results } };
}

const MiscInfoPage = ({ results }) => (
  <Layout>
    <h3>Additional Information</h3>
    <AddInfoForm body={results} />
  </Layout>
);

export default MiscInfoPage;
