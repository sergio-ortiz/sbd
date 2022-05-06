import prisma from "../../../lib/prisma";
import Layout from "../../../components/layout";
import LinkItem from "../../../components/link-item";

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
  console.log(results);
  return (
    <Layout>
      <h2>Business, ID #{id} &#x1F454;</h2>
      <h3>Information found in directory</h3>
      <h4>Official Business Name:</h4>
      <p>{results.names[0].content}</p>
      <h4>Altenative Names</h4>

      {(() => {
        if (results.names.length > 1) {
          const altNames = results.names.slice(1);
          return altNames.map((n) => <p key={n.id}>{n.content}</p>);
        }
      })()}

      <h4>Principal Address</h4>
      <p>{results.principalAddress}</p>
      <h4>Mailing Address</h4>
      <p>{results.mailingAddress}</p>

      <h4>Year Established</h4>
      <p>{results.year}</p>
      <h4>Industry</h4>
      <p>{results.industry}</p>

      <ul>
        <LinkItem href={`/business/${id}/misc`} text={"Miscellaneous Info"} />
      </ul>
      <br />
    </Layout>
  );
}
