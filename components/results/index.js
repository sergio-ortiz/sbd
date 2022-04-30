import Link from "next/link";

const Results = ({ results }) => (
  <>
    <h2>Found matching businesses in directory &#x1F4C1;</h2>
    <ul>
      {results.map(({ id, names, year }) => (
        <li key={id}>
          <Link href={`/business/${id}`}>
            <a>{`${names[0].content}, est. ${year}`}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

export default Results;
