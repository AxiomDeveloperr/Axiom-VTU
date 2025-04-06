import { MdDoneOutline, MdErrorOutline} from "react-icons/md";
import { IoClose } from "react-icons/io5";

const Notify = ({ msg, type, onClose}) => {
  const msgStyles = {
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
  };
  const iconStyles = {
      success: <MdDoneOutline className="rounded-full bg-green-500 text-white w-8 h-8" />,
      error: <MdErrorOutline className="rounded-full bg-red-500 text-white w-8 h-8" />,
    };
    

  return (
    <div
      className={`fixed top-5 right-5 flex items-start text-black px-4 py-3 rounded shadow-lg ${msgStyles[type]}`}
    >
      <div className="mr-4">
        {iconStyles[type]}
      </div>
      <div>
        <h2 className="text-sm py-2">{msg}</h2>
      </div>
      <div className="ml-4">
        <button
          onClick={() => onClose(false)}
          className="text-black text-4xl px-3 py-1 rounded transition"
        >
          {<IoClose />}
        </button>
      </div>
    </div>
  );
};

export default Notify;