import prisma from "../../../lib/prisma";
import Layout from "../../../components/layout";
import LinkItem from "../../../components/link-item";

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

export default function Success({
  names,
  principalAddress,
  mailingAddress,
  year,
  industry,
  id,
}) {
  return (
    <Layout>
      <h2>Business, ID #{id} &#x1F454;</h2>
      <h3>Information found in directory</h3>
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

      <ul>
        <LinkItem href={`/business/${id}/misc`} text={"Miscellaneous Info"} />
      </ul>
      <br />
    </Layout>
  );
}
