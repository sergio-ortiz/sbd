import Link from "next/link";
import { listItem, anchorText } from "./link-item.module.css";

const LinkItem = ({ href, text }) => (
  <li className={listItem}>
    <Link href={href}>
      <a className={anchorText}>{text}</a>
    </Link>
  </li>
);

export default LinkItem;
