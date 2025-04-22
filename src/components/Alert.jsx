import { FaCheckCircle } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const Alert = ({ type, message }) => {
  const styles =
    type == "success"
      ? "bg-green-50 border-green-300 text-green-600"
      : type == "error"
        ? "bg-red-50 border-red-300 text-red-600"
        : "tertiary-color border-primary-color text-primary-color";
  return (
    <div className="fixed top-1 left-0 right-0  z-20 max-w-3xl mx-auto px-4 md:px-8">
      <div className={`flex justify-between p-4 rounded-md border ${styles}`}>
        <div className="flex gap-3 sm:items-center">
          <div>
            {type == "success" ? (
              <FaCheckCircle />
            ) : type == "error" ? (
              <MdCancel />
            ) : (
              <FaCircleInfo />
            )}
          </div>
          <p className="sm:text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Alert;
