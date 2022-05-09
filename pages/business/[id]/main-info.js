import prisma from "../../../lib/prisma";
import Layout from "../../../components/layout";

export async function getServerSideProps(context) {
  const props = await prisma.business.findUnique({
    where: {
      id: parseInt(context.query.id),
    },
    select: {
      id: true,
      names: true,
      principalAddress: true,
      mailingAddress: true,
      year: true,
      industry: true,
    },
  });

  return { props };
}

const MainInfoPage = ({
  names,
  principalAddress,
  mailingAddress,
  year,
  industry,
  id,
}) => (
  <Layout>
    <h3>Main Info</h3>
    <h4>Official Business Name:</h4>
    <p>{names[0].content}</p>
    <h4>Altenative Names</h4>

    {(() => {
      if (names.length > 1) {
        const altNames = names.slice(1);
        return altNames.map((n) => <p key={n.id}>{n.content}</p>);
      }
    })()}

    <h4>Principal Address</h4>
    <p>{principalAddress}</p>
    <h4>Mailing Address</h4>
    <p>{mailingAddress}</p>

    <h4>Year Established</h4>
    <p>{year}</p>
    <h4>Industry</h4>
    <p>{industry}</p>
  </Layout>
);

export default MainInfoPage;
