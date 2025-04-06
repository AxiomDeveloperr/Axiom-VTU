import { useState } from 'react';
// import Header from './Header';
import trainingStackModules from '../../data/trainingStackModules';
// import { useNavigate } from 'react-router-dom';


const TrainingModules = () => {
    // const navigate = useNavigate()
    const [selectedStack, setSelectedStack] = useState(trainingStackModules[0]);
    const [selectedModule, setSelectedModule] = useState(null);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [showUpload, setShowUpload] = useState(false);

    const handleFileUpload = (e) => {
        setUploadedFile(e.target.files[0]);
    };

    const handleStackSelect = (stack) => {
        setSelectedStack(stack);
        setSelectedModule(null); 
        setShowUpload(false);
    };

    const handleUploadToggle = () => {
        setShowUpload(!showUpload);
    };

  return (
    <div>
        {/* <Header /> */}
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
                {/* <h2 className="text-2xl font-bold text-gray-700">Training Modules</h2> */}
                {/* <button
                    onClick={() => navigate("/admin/panel")}
                    className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                >
                    Go Back to Dashboard
                </button> */}
            </div>

            {/* Stacks */}
            <div className="flex flex-wrap justify-center space-x-4 mb-8">
                {trainingStackModules.map((stack) => (
                    <button
                        key={stack.name}
                        onClick={() => handleStackSelect(stack)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
                    >
                        {stack.name}
                    </button>
                ))}
            </div>

            {/* Modules */}
            <div>
                <h2 className="text-2xl font-semibold mb-4">{selectedStack.name} Modules</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedStack.modules.map((module) => (
                        <div
                            key={module.title}
                            className="p-6 bg-white rounded-lg shadow-md hover:bg-gray-100"
                            onClick={() => setSelectedModule(module)}
                        >
                            <img 
                                src={module.image} 
                                alt={module.title} 
                                className="w-full h-48 object-cover rounded-md mb-4" 
                            />
                            <h3 className="text-xl font-medium mb-2">{module.title}</h3>
                            <p>{module.description}</p>
                            <div>
                                <div className="flex items-center space-x-56">
                                    <p>Tutor:</p>
                                    <p>{module.tutor}</p>
                                </div>
                                <div className="flex items-center space-x-48">
                                    <p>Duration:</p>
                                    <p>{module.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Module Details */}
            {selectedModule && (
                <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-medium mb-2">{selectedModule.title}</h3>
                    <p className="mb-4">{selectedModule.description}</p>
                </div>
            )}

            {/* Upload Section */}
            <div className="mt-8">
                <button
                    onClick={handleUploadToggle}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
                >
                    {showUpload ? 'Hide Upload Section' : 'Upload File'}
                </button>

                {showUpload && (
                    <div className="mt-4 p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-medium mb-2">Upload Material for {selectedStack.name}</h3>
                        <input
                        type="file"
                        onChange={handleFileUpload}
                        className="block text-sm file:border file:rounded file:px-4 file:py-2 file:bg-blue-500 file:text-white file:cursor-pointer"
                        />

                        {uploadedFile && (
                        <div className="mt-4">
                            <p>Uploaded File: {uploadedFile.name}</p>
                        </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default TrainingModules;
