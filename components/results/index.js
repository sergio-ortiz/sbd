import LinkItem from "../link-item";

const Results = ({ results }) => (
  <>
    <h2>Found matching businesses in directory &#x1F4C1;</h2>
    <ul>
      {results.map(({ id, names, year }) => (
        <LinkItem
          href={`/business/${id}`}
          text={`${names[0].content}, est. ${year}`}
          key={id}
        />
      ))}
    </ul>
  </>
);

export default Results;
