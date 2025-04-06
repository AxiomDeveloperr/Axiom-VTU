// import Header from "./Header";
import { useParams } from "react-router-dom";
import mentorLists from "../../data/mentorLists";
import MentorDetailLists from "./MentorDetailLists";

const MentorDetails = () => {
    // const navigate = useNavigate();
    const { mentorId } = useParams();

    const mentor = mentorLists.find((m) => m.mentorId === mentorId);

    if (!mentor) {
        return <div className="text-center text-red-600 font-bold mt-10">Mentor Not Found</div>;
    }

    return (
        <div>
            {/* <Header /> */}
            <div className="container mx-auto p-6">
                <div className="mb-6 flex items-center justify-between space-x-2">
                    <h2 className="text-2xl font-bold text-gray-700">{mentor.name}s Details</h2>
                    {/* <button
                        onClick={() => navigate("/admin/panel")}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                    >
                        Go Back to Dashboard
                    </button> */}
                </div>
                
                <div className="mb-8">
                    <MentorDetailLists mentor={mentor} />
                </div>
            </div>
        </div>
    );
};

export default MentorDetails;
