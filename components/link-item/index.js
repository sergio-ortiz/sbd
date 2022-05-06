import Link from "next/link";
const LinkItem = ({ href, text }) => (
  <li>
    <Link href={href}>
      <a>{text}</a>
    </Link>
  </li>
);

export default LinkItem;
