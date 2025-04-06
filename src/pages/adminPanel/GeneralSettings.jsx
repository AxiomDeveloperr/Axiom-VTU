

const GeneralSettings = () => {
    return (
        <div>
            <div>
                <div className="container mx-auto p-6 flex space-x-10">
                    <div className="w-1/4 bg-white shadow-md rounded-lg p-6">
                        <ul className="space-y-4 text-gray-700">
                            <li className="p-3 bg-blue-100 rounded-md text-blue-600 font-semibold cursor-pointer">
                                Profile Settings
                            </li>
                            <li className="p-3 hover:bg-gray-100 rounded-md cursor-pointer">
                                Security Settings
                            </li>
                            <li className="p-3 hover:bg-gray-100 rounded-md cursor-pointer">
                                Notifications
                            </li>
                            <li className="p-3 hover:bg-gray-100 rounded-md cursor-pointer">
                                Connected Apps
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">Profile Settings</h2>
                        <p className="text-gray-500 mb-6">Upload your photo & personal details here</p>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GeneralSettings
