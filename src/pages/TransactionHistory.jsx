
import { CiSquareCheck } from "react-icons/ci";
import { CiSquareAlert } from "react-icons/ci";
import Transaction from "../data/transaction-history";

const TransactionHistory = ()=> {
     const getStatusStyle = (status) => {
    const lower = status.toLowerCase();
    switch (lower) {
      case "failed":
        return { color: "text-red-600", icon: <CiSquareAlert className="text-red-600" /> };
      case "initiated":
        return { color: "text-yellow-500", icon: <CiSquareAlert className="text-yellow-500" /> };
      default:
        return { color: "text-green-600", icon: <CiSquareCheck className="text-green-600" /> };
    }
  };

    return (
        <div className="flex px-6 flex-col mt-10">
      <table className="w-full table-auto text-left text-sm border-collapse hidden md:table">
        <thead >
          <tr className="text-[#880d1e] text-left border-b">
            <th className="py-2 px-3">Service</th>
            <th className="py-2 px-3">Amount</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Payment Method</th>
            <th className="py-2 px-3">Transaction No</th>
            <th className="py-2 px-3">Time</th>
            <th className="py-2 px-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Transaction.map((tx, index) => {
            const { color, icon } = getStatusStyle(tx.Status);
            return (
              <tr key={index} className="border-b">
                <td className="py-2 px-3 flex items-center gap-1">
                  {icon}
                  <span className="ml-1">{tx.Service}</span>
                </td>
                <td className="py-2 px-3">{tx.Amount}</td>
                <td className={`py-2 px-3 font-medium ${color}`}>{tx.Status}</td>
                <td className="py-2 px-3">{tx.PaymentMethod}</td>
                <td className="py-2 px-3 truncate">{tx.TransactionNo}</td>
                <td className="py-2 px-3">{tx.Time || "—"}</td>
                <td className="py-2 px-3">
                  <button className="text-blue-500 underline">Open</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>


      <div className="md:hidden space-y-4">
        {Transaction.map((tx, index) => {
          const { color, icon } = getStatusStyle(tx.Status);
          return (
            <div
              key={index}
              className="bg-white shadow-sm border rounded-lg p-4 text-sm"
            >
              <div className={`flex items-center gap-2 font-semibold mb-2 ${color}`}>
                {icon}
                {tx.Service}
              </div>
              <div>
                <span className="font-medium">Amount:</span> {tx.Amount}
              </div>
              <div className={`${color}`}>
                <span className="font-medium">Status:</span> {tx.Status}
              </div>
              <div>
                <span className="font-medium">Payment:</span> {tx.PaymentMethod}
              </div>
              <div>
                <span className="font-medium">Transaction No:</span>{" "}
                <span className="break-words">{tx.TransactionNo}</span>
              </div>
              <div>
                <span className="font-medium">Time:</span> {tx.Time || "—"}
              </div>
              <div className="mt-2">
                <button className="text-blue-500 underline">Open</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>

    )
}

export default TransactionHistory;