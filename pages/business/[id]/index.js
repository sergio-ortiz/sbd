import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import LinkItem from "../../../components/link-item";

const BusinessPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <h2>Business, ID #{id} &#x1F454;</h2>
      <ul>
        <LinkItem href={`/business/${id}/main-info`} text={"Main Info"} />
        <LinkItem href={`/business/${id}/misc`} text={"Miscellaneous Info"} />
      </ul>
      <br />
    </Layout>
  );
};

export default BusinessPage;
