import Link from "next/link";
import { btn, flexContainer } from "./create-button.module.css";

const CreateButton = () => (
  <div className={flexContainer}>
    <Link href="/create-business">
      <a>
        <button className={btn}>Create</button>
      </a>
    </Link>
  </div>
);

export default CreateButton;
