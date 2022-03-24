import { useRouter } from "next/router";
import Layout from "../../components/layout";
import DymForm from "../../components/dym-form";

export default function DoYouMean() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <Layout>
      <h2>Do you mean ...?</h2>
      <DymForm cipher={name} />
    </Layout>
  );
}
