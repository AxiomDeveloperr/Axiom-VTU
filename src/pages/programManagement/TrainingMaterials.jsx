import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaTrash } from "react-icons/fa";
import ReactPlayer from "react-player";

const TrainingMaterials = () => {
    const stackLists = ["Web Development", "Cloud Engineering & IT Ops", "Graphics Design", "Product Design", "Motion Design", "Data Analytics"];

    const [videos, setVideos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState("Web Development");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
        setVideos(savedVideos);
    }, []);

    const extractThumbnail = (link) => {
        try {
            const url = new URL(link);
            if (url.hostname.includes("youtube.com") || url.hostname.includes("youtu.be")) {
                const videoId = url.searchParams.get("v") || url.pathname.split("/").pop();
                return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
            }
        } catch (error) {
            console.error("Invalid video URL", error);
        }
        return "https://via.placeholder.com/160x90"; // Default placeholder
    };

    const handleAddVideo = async (data) => {
        const videoObj = {
            ...data,
            id: Date.now(),
            thumbnail: extractThumbnail(data.link),
            duration: "",
        };

        setVideos([...videos, videoObj]);
        localStorage.setItem("videos", JSON.stringify([...videos, videoObj]));
        reset();
        setIsModalOpen(false);
    };

    const deleteVideo = (index) => {
        const updatedVideos = videos.filter((_, i) => i !== index);
        setVideos(updatedVideos);
        localStorage.setItem("videos", JSON.stringify(updatedVideos));
    };

    const filteredVideos = videos.filter(video => video.stack === activeCategory);

    return (
        <div className="p-3 relative">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-semibold"></h2>
                <button
                    className="bg-tt-primary text-white px-4 py-2 rounded-lg hover:bg-tt-primary"
                    onClick={() => {
                        reset();
                        setIsModalOpen(true);
                    }}
                >
                    Upload Video
                </button>
            </div>

            <div className="flex flex-wrap justify-center space-x-4 mb-8">
                {stackLists.map((stack, index) => (
                    <button key={index}
                        className={`px-4 py-2 rounded-lg ${activeCategory === stack ? "bg-tt-primary text-white" : "bg-gray-200 text-gray-700"}`}
                        onClick={() => setActiveCategory(stack)}
                    >
                        {stack}
                    </button>
                ))}
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-semibold mb-4">Upload New Video</h2>
                        <form onSubmit={handleSubmit(handleAddVideo)} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Title"
                                {...register("title", { required: "Title is required" })}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
                            />
                            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
                
                            <input
                                type="text"
                                placeholder="Video Link"
                                {...register("link", { required: "Video link is required" })}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
                            />
                            {errors.link && <p className="text-red-500">{errors.link.message}</p>}

                            <select {...register("stack", {required: "Stack is required"})}
                                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
                            >
                                <option value="">Select option</option>
                                {stackLists.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                
                            <textarea
                                placeholder="Description"
                                rows={3}
                                {...register("description", { required: "Description is required" })}
                                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
                            />
                            {errors.description && <p className="text-red-500">{errors.description.message}</p>}

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="bg-gray-300 px-4 py-2 rounded-lg mr-2"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="bg-tt-primary text-white px-4 py-2 rounded-lg hover:bg-tt-primary"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {filteredVideos.length === 0 ? (
                    <div className="bg-white col-span-3 text-gray-500 text-center border p-4 rounded-lg">
                        No video uploaded yet for {activeCategory}
                    </div>
                ) : (
                    filteredVideos.map((video, index) => (
                        <div key={index} className="border bg-white p-6 rounded-lg shadow-md relative">
                            <div className="border-b pb-2 flex justify-between items-center mb-5">
                                <h3 className="text-tt-primary text-lg font-bold">{video.title}</h3>
                                <button onClick={() => deleteVideo(index)} className="absolute top-8 right-7 text-red-600 hover:text-red-800">
                                    <FaTrash />
                                </button>
                            </div>
                            <img src={video.thumbnail} alt="Thumbnail" className="w-full rounded mb-5" />
                            <ReactPlayer
                                url={video.link}
                                width="100%"
                                height="0"
                                style={{ display: "none" }}
                                onDuration={(duration) => {
                                    const updatedVideos = [...videos];
                                    updatedVideos[index].duration = `${Math.floor(duration / 60)}m ${Math.floor(duration % 60)}s`;
                                    setVideos(updatedVideos);
                                    localStorage.setItem("videos", JSON.stringify(updatedVideos));
                                }}
                            />
                            <p className="text-tt-grey text-base text-justify">{video.description}</p>
                            <p className="text-xs text-gray-500">Duration: {video.duration || "Calculating..."}</p>
                            <a href={video.link} target="_blank" rel="noopener noreferrer" className="text-tt-primary mt-2 block">Watch Video</a>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TrainingMaterials;
