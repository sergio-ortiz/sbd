import { useRouter } from "next/router";
import { bar, input } from "./search-bar.module.css";

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/results/${e.target.search.value}`);
  };

  return (
    <form className={bar} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className={input}
        required
      />
      &#x1F50E;
    </form>
  );
};

export default SearchBar;
