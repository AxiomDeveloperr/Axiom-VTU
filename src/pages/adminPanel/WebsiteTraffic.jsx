
const WebsiteTraffic = () => {
    return (
        <div className="w-[50%] bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800">Website Traffic</h2>
            <p className="text-gray-500 mt-1 text-sm">Unique Visitors</p>
            <p className="text-4xl font-bold text-gray-900 mt-1">2,590</p>

            <div className="mt-4">
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                <div className="h-full bg-green-400 w-[50%]"></div>
                <div className="h-full bg-blue-500 w-[27%]"></div>
                <div className="h-full bg-yellow-400 w-[8%]"></div>
                <div className="h-full bg-red-500 w-[7%]"></div>
                </div>
            </div>

            <div className="mt-6 space-y-3">
                <div className="flex justify-between items-center border-b-2">
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-green-400 rounded-full mr-2"></span>
                        <p className="text-gray-700">Direct</p>
                    </div>
                    <p className="text-gray-900 font-semibold">12,890</p>
                    <p className="text-gray-500">50%</p>
                </div>

                <div className="flex justify-between items-center border-b-2">
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-blue-500 rounded-full mr-2"></span>
                        <p className="text-gray-700">Search</p>
                    </div>
                    <p className="text-gray-900 font-semibold">7,245</p>
                    <p className="text-gray-500">27%</p>
                </div>

                <div className="flex justify-between items-center border-b-2">
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-yellow-400 rounded-full mr-2"></span>
                        <p className="text-gray-700">Referrals</p>
                    </div>
                    <p className="text-gray-900 font-semibold">4,256</p>
                    <p className="text-gray-500">8%</p>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="h-3 w-3 bg-red-500 rounded-full mr-2"></span>
                        <p className="text-gray-700">Social</p>
                    </div>
                    <p className="text-gray-900 font-semibold">500</p>
                    <p className="text-gray-500">7%</p>
                </div>
            </div>
        </div>
    );
};

export default WebsiteTraffic;
