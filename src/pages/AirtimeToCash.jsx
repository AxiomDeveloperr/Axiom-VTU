import { useState } from "react";

const AirtimeToCash = () => {

    const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const providers = ["MTN", "Airtel", "Glo", "9mobile"];

  const handleSelect = (provider) => {
    setSelected(provider);
    setIsOpen(false);

  }
    return (

      <div className="flex justify-center items-center my-10 py-10 flex-col bg-[#f5f3f4] px-4 md:px-0">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-8">
                <div>
                <h2 className="text-[#880d1e]">Fill Info</h2>
                <h2 className="w-36 bg-[#880d1e] h-2 rounded"></h2>
            </div>
            <div>
                <h2 className="text-gray-400">Make Payment</h2>
                <h2 className="w-36 bg-gray-400 h-2 rounded"></h2>
            </div>
            <div>
                <h2 className="text-gray-400">View Receipt</h2>
                <h2 className="w-36 bg-gray-400 h-2 rounded"></h2>
            </div>
            </div>
            
            <div className=" w-full max-w-2xl bg-white p-6 md:p-10 rounded shadow-md">
              <div className="flex justify-center items-center mb-6">
                <h1 className="text-xl font-medium text-[#880d1e]">Airtime To Cash</h1>
              </div>
                
                <div className="flex  flex-col md:flex-row gap-10 mb-4">
                    <div className="flex flex-col gap-2 items-start w-full md:w-1/2 relative">
                      <label className="text-black text-md font-md">
              Select Network
            </label>
                        <button
        onClick={() => setIsOpen(!isOpen)}
        className=" w-full h-10 bg-gray-50 border border-[#880d1e] flex items-center justify-between rounded px-4 shadow-sm text-gray-700 md:w-64 md:h-8"
      >
        {selected ? selected : "Select Network Provider"}
        <span className="float-right">&#x25BC;</span>
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 md:w-48 w-full bg-gray-100 hover:bg-[#880d1e] border border-gray-300 rounded shadow-md cursor-pointer">
          {providers.map((provider) => (
            <li
              key={provider}
              onClick={() => handleSelect(provider)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {provider}
            </li>
          ))}
        </ul>
      )}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="flex font-md text-md text-black items-start">Phone Number</h2>
                        <input type="number" className="flex bg-gray-50 md:w-64 w-full h-8 rounded border-[#880d1e] border-1"/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                        <h2 className="flex font-md text-md text-black items-start">Amount</h2>
                      <input type="number" className="flex bg-gray-50 w-full h-8 rounded border-[#880d1e] border-1"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="flex font-md text-md text-black items-start">Purchase Price</h2>
                      <input type="number" className="flex bg-gray-50 w-full h-8 rounded border-[#880d1e] border-1"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="flex font-md text-md text-black items-start">Airtime Share Pin</h2>
                        <input type="number" className="flex bg-gray-50 w-full h-8 rounded border-[#880d1e] border-1"/>
                    </div>
                    <div className="flex mt-6">
                        <button className="bg-[#880d1e] h-10 flex rounded w-full justify-center pt-1.5 text-white font-medium">Proceed</button>
                    </div>
            </div>
        </div>
    )
}

export default AirtimeToCash;