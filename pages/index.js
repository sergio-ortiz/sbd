import Layout from "../components/layout";
import CreateButton from "../components/create-button";
import SearchBar from "../components/search-bar";

export default function Home() {
  return (
    <Layout>
      <h2>Welcome Home &#x1F3E0;</h2>
      <CreateButton />
      <SearchBar />
    </Layout>
  );
}
