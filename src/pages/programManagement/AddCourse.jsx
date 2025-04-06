import { useState } from "react";
import CustomInput from "../../components/CustomInput";
// import { useNavigate } from "react-router-dom";

const AddCourse = () => {
    // const navigate = useNavigate();
    const [course, setCourse] = useState({
        courseTitle: "",
        courseCode: "",
        shortDescription: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCourses = JSON.parse(localStorage.getItem("newCourses")) || [];
        const updatedCourses = [...newCourses, course];
        localStorage.setItem("newCourses", JSON.stringify(updatedCourses));

        console.log("Course Added:", course);
        console.log("Updated Course List:", updatedCourses);

        setModalMessage(`Successfully added ${course.courseTitle} (${course.courseCode})`);
        setShowModal(true);

        setCourse({
            courseTitle: "",
            courseCode: "",
            shortDescription: "",
        });
    };

    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="mb-6 flex items-center justify-between space-x-2">
                </div>
                <div className="p-4 border rounded shadow-lg bg-white relative">
                    {showModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
                            <div className="bg-white p-6 rounded shadow-lg">
                                <p>{modalMessage}</p>
                                <button
                                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => setShowModal(false)}
                                >
                                Close
                                </button>
                            </div>
                        </div>
                    )}
                    <div>
                        <form onSubmit={handleSubmit}>
                        <CustomInput 
                            type="text"
                            name="courseTitle"
                            value={course.courseTitle}
                            label="Stack Name"
                            onChange={handleChange}
                            placeholder="Enter Course Title"
                        />
                        <CustomInput 
                            type="text"
                            name="courseCode"
                            value={course.courseCode}
                            label="Course Code"
                            onChange={handleChange}
                            placeholder="Enter Course Code"
                        />
                        <label className="font-medium">Short Description</label>
                        <textarea
                            name="shortDescription"
                            placeholder="Write Short Description about the course"
                            value={course.shortDescription}
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
                        ></textarea>
                        <button
                            type="submit"
                            className="p-3 mt-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300"
                        >
                            Add Course
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCourse;
