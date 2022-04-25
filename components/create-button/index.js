import Link from "next/link";
import { btn } from "./create-button.module.css";

const CreateButton = () => (
  <Link href="/create-business">
    <a>
      <button className={btn}>Create</button>
    </a>
  </Link>
);

export default CreateButton;
