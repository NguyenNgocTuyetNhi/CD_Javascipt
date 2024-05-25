import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const HeaderContent = ({ title = "" }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-5">
      <span>{title}</span>
      <Link
        to="#"
        className="bg-danger text-white d-flex align-items-center gap-2 py-1 px-2"
      >
        <CiTrash />
        <span>Trash</span>
      </Link>
    </div>
  );
};

export default HeaderContent;
