import Layout from "../../components/layout";

export async function getServerSideProps(context) {
  return {
    props: { id: context.query.id },
  };
}

export default function Success({ id }) {
  return (
    <Layout>
      <h2>Business, ID #{id}: added to directory. &#x1F370;&#x1F389;</h2>
    </Layout>
  );
}
