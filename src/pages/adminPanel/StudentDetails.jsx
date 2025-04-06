// import Header from "./Header";
import { useParams } from "react-router-dom";
import studentLists from "../../data/studentLists";
import StudentDetailLists from "./StudentDetailLists";

const StudentDetails = () => {
    // const navigate = useNavigate();
    const { studentId } = useParams();

    const student = studentLists.find((s) => s.studentId === studentId);

    if (!student) {
        return <div className="text-center text-red-600 font-bold mt-10">Student Not Found</div>;
    }

    return (
        <div>
            {/* <Header /> */}
            <div className="container mx-auto p-6">
                <div className="mb-6 flex items-center justify-between space-x-2">
                    <h2 className="text-2xl font-bold text-gray-700">{student.name}s Details</h2>
                    {/* <button
                        onClick={() => navigate("/admin/panel")}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                    >
                        Go Back to Dashboard
                    </button> */}
                </div>
                
                <div className="mb-8">
                    <StudentDetailLists student={student} />
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
